/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, forwardRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, wrapEffect } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import * as THREE from 'three';

const TRAIL_LENGTH = 12;

const waveVertexShader = `
precision mediump float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const waveFragmentShader = `
precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;
uniform vec2 mouseTrail[12];
uniform float trailAges[12];

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.5;
  value += amp * noise(p); p *= waveFrequency; amp *= waveAmplitude;
  value += amp * noise(p);
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p + fbm(p2)); 
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;
  float f = pattern(uv);
  vec3 col = mix(vec3(1.0), vec3(1.0) - waveColor, f);
  
  if (enableMouseInteraction == 1) {
    float totalEffect = 0.0;
    
    for (int i = 0; i < 12; i++) {
      float age = trailAges[i];
      if (age > 0.01) {
        vec2 trailPos = mouseTrail[i];
        vec2 trailNDC = (trailPos / resolution - 0.5) * vec2(1.0, -1.0);
        trailNDC.x *= resolution.x / resolution.y;
        float dist = length(uv - trailNDC);
        float trailRadius = mouseRadius * (0.5 + 0.5 * age);
        float effect = (1.0 - smoothstep(0.0, trailRadius, dist)) * age;
        totalEffect = max(totalEffect, effect);
      }
    }
    
    col = mix(col, vec3(0.3), totalEffect * 0.7);
  }
  
  gl_FragColor = vec4(col, 1.0);
}
`;

const ditherFragmentShader = `
precision mediump float;
uniform float colorNum;
uniform float pixelSize;

float bayer4(vec2 p) {
  vec2 i = floor(mod(p, 4.0));
  float b = mod(i.x + i.y * 2.0, 4.0);
  return b / 4.0 - 0.375;
}

void mainImage(in vec4 inputColor, in vec2 uv, out vec4 outputColor) {
  vec2 pixelCoord = floor(uv * resolution / pixelSize);
  vec2 uvPixel = (pixelCoord * pixelSize) / resolution;
  vec4 color = texture2D(inputBuffer, uvPixel);
  
  float threshold = bayer4(pixelCoord);
  float step = 1.0 / (colorNum - 1.0);
  color.rgb = floor((color.rgb + threshold * step) * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
  
  outputColor = color;
}
`;

class RetroEffectImpl extends Effect {
  constructor() {
    const uniforms = new Map([
      ['colorNum', new THREE.Uniform(4.0)],
      ['pixelSize', new THREE.Uniform(2.0)]
    ]);
    super('RetroEffect', ditherFragmentShader, { uniforms });
    this.uniforms = uniforms;
  }
  set colorNum(v) { this.uniforms.get('colorNum').value = v; }
  get colorNum() { return this.uniforms.get('colorNum').value; }
  set pixelSize(v) { this.uniforms.get('pixelSize').value = v; }
  get pixelSize() { return this.uniforms.get('pixelSize').value; }
}

const WrappedRetro = wrapEffect(RetroEffectImpl);

const RetroEffect = forwardRef((props, ref) => {
  const { colorNum, pixelSize } = props;
  return <WrappedRetro ref={ref} colorNum={colorNum} pixelSize={pixelSize} />;
});
RetroEffect.displayName = 'RetroEffect';

function DitheredWaves({
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  waveColor,
  colorNum,
  pixelSize,
  disableAnimation,
  enableMouseInteraction,
  mouseRadius
}) {
  const mesh = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const { viewport, size, gl } = useThree();
  
  const trailRef = useRef(Array(TRAIL_LENGTH).fill(null).map(() => new THREE.Vector2(-9999, -9999)));
  const trailAgesRef = useRef(Array(TRAIL_LENGTH).fill(0));
  const lastMousePos = useRef(new THREE.Vector2(-9999, -9999));
  const trailIndexRef = useRef(0);
  const lastTrailTime = useRef(0);
  const frameCount = useRef(0);

  const waveUniformsRef = useRef({
    time: new THREE.Uniform(0),
    resolution: new THREE.Uniform(new THREE.Vector2(0, 0)),
    waveSpeed: new THREE.Uniform(waveSpeed),
    waveFrequency: new THREE.Uniform(waveFrequency),
    waveAmplitude: new THREE.Uniform(waveAmplitude),
    waveColor: new THREE.Uniform(new THREE.Color(...waveColor)),
    mousePos: new THREE.Uniform(new THREE.Vector2(0, 0)),
    enableMouseInteraction: new THREE.Uniform(enableMouseInteraction ? 1 : 0),
    mouseRadius: new THREE.Uniform(mouseRadius),
    mouseTrail: new THREE.Uniform(Array(TRAIL_LENGTH).fill(null).map(() => new THREE.Vector2(-9999, -9999))),
    trailAges: new THREE.Uniform(Array(TRAIL_LENGTH).fill(0))
  });

  useEffect(() => {
    const dpr = gl.getPixelRatio();
    const w = Math.floor(size.width * dpr);
    const h = Math.floor(size.height * dpr);
    const res = waveUniformsRef.current.resolution.value;
    if (res.x !== w || res.y !== h) {
      res.set(w, h);
    }
  }, [size, gl]);

  useEffect(() => {
    if (!enableMouseInteraction) return;
    
    let lastUpdate = 0;
    const handleGlobalMouseMove = (e) => {
      const now = performance.now();
      if (now - lastUpdate < 16) return;
      lastUpdate = now;
      
      const rect = gl.domElement.getBoundingClientRect();
      const dpr = gl.getPixelRatio();
      mouseRef.current.set(
        (e.clientX - rect.left) * dpr,
        (e.clientY - rect.top) * dpr
      );
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [enableMouseInteraction, gl]);

  const prevColor = useRef([...waveColor]);
  
  useFrame(({ clock }) => {
    const u = waveUniformsRef.current;
    const currentTime = clock.getElapsedTime();
    frameCount.current++;

    if (!disableAnimation) {
      u.time.value = currentTime;
    }

    if (frameCount.current % 2 === 0) {
      if (u.waveSpeed.value !== waveSpeed) u.waveSpeed.value = waveSpeed;
      if (u.waveFrequency.value !== waveFrequency) u.waveFrequency.value = waveFrequency;
      if (u.waveAmplitude.value !== waveAmplitude) u.waveAmplitude.value = waveAmplitude;

      if (!prevColor.current.every((v, i) => v === waveColor[i])) {
        u.waveColor.value.set(...waveColor);
        prevColor.current = [...waveColor];
      }
    }

    u.enableMouseInteraction.value = enableMouseInteraction ? 1 : 0;
    u.mouseRadius.value = mouseRadius;

    if (enableMouseInteraction) {
      u.mousePos.value.copy(mouseRef.current);
      
      const dist = mouseRef.current.distanceTo(lastMousePos.current);
      const timeSinceLastTrail = currentTime - lastTrailTime.current;
      
      if (dist > 8 && timeSinceLastTrail > 0.033) {
        const idx = trailIndexRef.current % TRAIL_LENGTH;
        trailRef.current[idx].copy(mouseRef.current);
        trailAgesRef.current[idx] = 1.0;
        trailIndexRef.current++;
        lastMousePos.current.copy(mouseRef.current);
        lastTrailTime.current = currentTime;
      }
      
      const decayRate = 0.04;
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        if (trailAgesRef.current[i] > 0) {
          trailAgesRef.current[i] = Math.max(0, trailAgesRef.current[i] - decayRate);
        }
      }
      
      u.mouseTrail.value = trailRef.current;
      u.trailAges.value = trailAgesRef.current;
    }
  });

  return (
    <>
      <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry args={[1, 1]} />
        <shaderMaterial
          vertexShader={waveVertexShader}
          fragmentShader={waveFragmentShader}
          uniforms={waveUniformsRef.current}
        />
      </mesh>

      <EffectComposer>
        <RetroEffect colorNum={colorNum} pixelSize={pixelSize} />
      </EffectComposer>
    </>
  );
}

function useOptimizedSettings() {
  const [settings, setSettings] = useState({
    isMobile: false,
    prefersReducedMotion: false,
    isLowPower: false
  });

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowPower = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
    
    setSettings({ isMobile, prefersReducedMotion, isLowPower });
  }, []);

  return settings;
}

export default function Dither({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.3,
  waveColor = [0.5, 0.5, 0.5],
  colorNum = 4,
  pixelSize = 2,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.1
}) {
  const { isMobile, prefersReducedMotion, isLowPower } = useOptimizedSettings();
  
  if (isMobile || prefersReducedMotion) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100" />
    );
  }

  const adjustedProps = useMemo(() => ({
    waveSpeed: isLowPower ? waveSpeed * 0.5 : waveSpeed,
    waveFrequency,
    waveAmplitude,
    waveColor,
    colorNum,
    pixelSize: isLowPower ? 3 : pixelSize,
    disableAnimation: isLowPower ? true : disableAnimation,
    enableMouseInteraction: isLowPower ? false : enableMouseInteraction,
    mouseRadius
  }), [isLowPower, waveSpeed, waveFrequency, waveAmplitude, waveColor, colorNum, pixelSize, disableAnimation, enableMouseInteraction, mouseRadius]);

  return (
    <Canvas
      className="w-full h-full relative"
      camera={{ position: [0, 0, 6] }}
      dpr={1}
      gl={{ 
        antialias: false,
        preserveDrawingBuffer: false,
        powerPreference: 'high-performance'
      }}
      performance={{ min: 0.5 }}
    >
      <DitheredWaves {...adjustedProps} />
    </Canvas>
  );
}
