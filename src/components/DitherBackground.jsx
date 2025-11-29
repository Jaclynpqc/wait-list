import React, { Suspense } from 'react';
import DitherErrorBoundary from './DitherErrorBoundary';

const Dither = React.lazy(() => import('./Dither'));

const DitherBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[800px] sm:h-[900px] md:h-[1100px] lg:h-[1300px] overflow-hidden z-0">
      <DitherErrorBoundary>
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-gray-100 to-white" />}>
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.06}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </Suspense>
      </DitherErrorBoundary>
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </div>
  );
};

export default DitherBackground;

