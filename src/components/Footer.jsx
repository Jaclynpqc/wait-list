import React from 'react';

const Footer = ({ className }) => {
  return (
    <div className={className} data-name="Footer" data-node-id="168:382">
      <div className="bg-gray-300 border border-solid border-gray-300 h-px shrink-0 w-full" data-name="Divider" data-node-id="168:324" />
      
      {/* Desktop & Tablet Layout (3 columns) */}
      <div className="hidden md:flex gap-[50px] lg:gap-[100px] xl:gap-[150px] items-center justify-between w-full" data-node-id="168:380">
        <div className="flex gap-[15px] items-center" data-name="Social Links" data-node-id="168:327">
          <a href="#" className="relative shrink-0 size-[30px] lg:size-[35px] hover:opacity-70 transition-opacity" data-name="Linkedin" data-node-id="168:335">
            <div className="absolute inset-[-2.143%]">
              <img alt="LinkedIn" className="block max-w-none size-full" src="/54e6392ffd4531523d2aea916e092f82390c9900.svg" style={{ filter: 'invert(1)' }} />
            </div>
          </a>
          <a href="#" className="inline-grid relative shrink-0 hover:opacity-70 transition-opacity" data-name="Instagram" data-node-id="168:368">
            <div className="relative size-[30px] lg:size-[35px]" data-name="insta" data-node-id="168:369">
              <img alt="Instagram" className="block max-w-none size-full" src="/b88b0afd3dbc91a5cb0d297533938f45151910f9.svg" style={{ filter: 'invert(1)' }} />
            </div>
          </a>
          <a href="#" className="inline-grid relative shrink-0 hover:opacity-70 transition-opacity" data-name="Youtube" data-node-id="168:361">
            <div className="relative size-[30px] lg:size-[35px]" data-name="twitter" data-node-id="168:362">
              <img alt="Twitter" className="block max-w-none size-full" src="/0b74dc4032ddff5011e6415c24c8510aa3411a0e.svg" style={{ filter: 'invert(1)' }} />
            </div>
          </a>
        </div>
        <div className="flex gap-[5px] items-end" data-node-id="168:360">
          <p className="font-mondwest leading-normal not-italic text-[14px] lg:text-[16px] text-nowrap text-black whitespace-pre">
            A product of{" "}
          </p>
          <div className="box-border flex flex-col h-[16px] lg:h-[18px] items-start px-[7px] lg:px-[8.667px] py-[3.5px] lg:py-[4.333px] relative w-[60px] lg:w-[68.833px]" data-name="logo" data-node-id="168:355">
            <div className="absolute flex flex-col font-youth justify-end leading-[0] left-0 not-italic text-black text-[0px] text-nowrap top-[16px] lg:top-[18px] translate-y-[-100%]" data-node-id="168:356">
              <p className="leading-normal whitespace-pre">
                <span className="text-[11px] lg:text-[13.333px]">h ld</span>
                <span className="font-mondwest not-italic text-[14px] lg:text-[16.667px]">sp</span>
                <span className="font-mondwest not-italic text-[14px] lg:text-[16.667px]">a</span>
                <span className="font-mondwest not-italic text-[14px] lg:text-[16.667px]">ce</span>
              </p>
            </div>
            <div className="h-[7.5px] lg:h-[8.719px] relative shrink-0 w-[7.5px] lg:w-[8.833px]" data-name="Rectangle 1 1" data-node-id="168:357">
              <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="/fcafa7b5073045f0dd38591f3c9216ec8e77ce76.png" />
            </div>
          </div>
        </div>
        <div className="inline-grid relative" data-node-id="168:325">
          <p className="font-mondwest leading-normal not-italic text-[14px] lg:text-[16px] text-nowrap text-black whitespace-pre">
            © 2025 Holdspace. All rights reserved
          </p>
        </div>
      </div>

      {/* Mobile Layout (Stacked) */}
      <div className="md:hidden flex flex-col gap-[20px] items-center w-full py-4">
        <div className="flex gap-[15px] items-center justify-center" data-name="Social Links">
          <a href="#" className="relative shrink-0 size-[35px] hover:opacity-70 transition-opacity">
            <div className="absolute inset-[-2.143%]">
              <img alt="LinkedIn" className="block max-w-none size-full" src="/54e6392ffd4531523d2aea916e092f82390c9900.svg" style={{ filter: 'invert(1)' }} />
            </div>
          </a>
          <a href="#" className="inline-grid relative shrink-0 hover:opacity-70 transition-opacity">
            <div className="relative size-[35px]">
              <img alt="Instagram" className="block max-w-none size-full" src="/b88b0afd3dbc91a5cb0d297533938f45151910f9.svg" style={{ filter: 'invert(1)' }} />
            </div>
          </a>
          <a href="#" className="inline-grid relative shrink-0 hover:opacity-70 transition-opacity">
            <div className="relative size-[35px]">
              <img alt="Twitter" className="block max-w-none size-full" src="/0b74dc4032ddff5011e6415c24c8510aa3411a0e.svg" style={{ filter: 'invert(1)' }} />
            </div>
          </a>
        </div>
        <div className="flex gap-[5px] items-end justify-center">
          <p className="font-mondwest leading-normal not-italic text-[14px] text-nowrap text-black whitespace-pre">
            A product of{" "}
          </p>
          <div className="box-border flex flex-col h-[18px] items-start px-[8.667px] py-[4.333px] relative w-[68.833px]">
            <div className="absolute flex flex-col font-youth justify-end leading-[0] left-0 not-italic text-black text-[0px] text-nowrap top-[18px] translate-y-[-100%]">
              <p className="leading-normal whitespace-pre">
                <span className="text-[13.333px]">h ld</span>
                <span className="font-mondwest not-italic text-[16.667px]">sp</span>
                <span className="font-mondwest not-italic text-[16.667px]">a</span>
                <span className="font-mondwest not-italic text-[16.667px]">ce</span>
              </p>
            </div>
            <div className="h-[8.719px] relative shrink-0 w-[8.833px]">
              <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="/fcafa7b5073045f0dd38591f3c9216ec8e77ce76.png" />
            </div>
          </div>
        </div>
        <div className="inline-grid relative text-center">
          <p className="font-mondwest leading-normal not-italic text-[12px] text-black">
            © 2025 Holdspace. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

