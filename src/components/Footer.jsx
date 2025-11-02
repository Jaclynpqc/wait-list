import React from 'react';

const Footer = ({ className }) => {
  return (
    <div className={className} data-name="Footer" data-node-id="168:382">
      <div className="bg-white border border-solid border-white h-px opacity-20 shrink-0 w-full" data-name="Divider" data-node-id="168:324" />
      <div className="flex gap-[277px] items-center w-full" data-node-id="168:380">
        <div className="flex gap-[15px] items-center" data-name="Social Links" data-node-id="168:327">
          <a href="#" className="relative shrink-0 size-[35px]" data-name="Linkedin" data-node-id="168:335">
            <div className="absolute inset-[-2.143%]">
              <img alt="LinkedIn" className="block max-w-none size-full" src="/54e6392ffd4531523d2aea916e092f82390c9900.svg" />
            </div>
          </a>
          <a href="#" className="inline-grid relative shrink-0" data-name="Instagram" data-node-id="168:368">
            <div className="relative size-[35px]" data-name="insta" data-node-id="168:369">
              <img alt="Instagram" className="block max-w-none size-full" src="/b88b0afd3dbc91a5cb0d297533938f45151910f9.svg" />
            </div>
          </a>
          <a href="#" className="inline-grid relative shrink-0" data-name="Youtube" data-node-id="168:361">
            <div className="relative size-[35px]" data-name="twitter" data-node-id="168:362">
              <img alt="Twitter" className="block max-w-none size-full" src="/0b74dc4032ddff5011e6415c24c8510aa3411a0e.svg" />
            </div>
          </a>
        </div>
        <div className="flex gap-[5px] items-end" data-node-id="168:360">
          <p className="font-mondwest leading-normal not-italic text-[16px] text-nowrap text-white whitespace-pre">
            A product of{" "}
          </p>
          <div className="box-border flex flex-col h-[18px] items-start px-[8.667px] py-[4.333px] relative w-[68.833px]" data-name="logo" data-node-id="168:355">
            <div className="absolute flex flex-col font-youth justify-end leading-[0] left-0 not-italic text-primary-light text-[0px] text-nowrap top-[18px] translate-y-[-100%]" data-node-id="168:356">
              <p className="leading-normal whitespace-pre">
                <span className="text-[13.333px]">h ld</span>
                <span className="font-mondwest not-italic text-[16.667px]">sp</span>
                <span className="font-mondwest not-italic text-[16.667px]">a</span>
                <span className="font-mondwest not-italic text-[16.667px]">ce</span>
              </p>
            </div>
            <div className="h-[8.719px] relative shrink-0 w-[8.833px]" data-name="Rectangle 1 1" data-node-id="168:357">
              <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="/fcafa7b5073045f0dd38591f3c9216ec8e77ce76.png" />
            </div>
          </div>
        </div>
        <div className="inline-grid relative" data-node-id="168:325">
          <p className="font-mondwest leading-normal not-italic text-[16px] text-nowrap text-white whitespace-pre">
            © 2025 Holdspace. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

