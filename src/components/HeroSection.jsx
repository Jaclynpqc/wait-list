import React from 'react';
import EmailSignup from './EmailSignup';

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-[24px] md:gap-[30px] lg:gap-[34px] items-center justify-center mx-auto pt-[200px] md:pt-[140px] lg:pt-[200px] px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10 pb-[100px] md:pb-0">
      <div className="flex flex-col gap-[16px] md:gap-[24px] lg:gap-[30px] items-center justify-center w-full max-w-[889px]">
        <div className="flex flex-col items-center">
          <h1 className="font-youth text-black text-center leading-tight text-embossed">
            <span className="font-mondwest not-italic text-[40px] sm:text-[56px] md:text-[75px] lg:text-[100px] block sm:inline">AI stage </span>
            <span className="text-[40px] sm:text-[56px] md:text-[65px] lg:text-[80px] block sm:inline">for presenters</span>
          </h1>
        </div>

        <div className="flex items-center justify-center w-full px-2">
          <div className="bg-white/90 backdrop-blur-sm border-2 border-black px-[20px] sm:px-[28px] md:px-[36px] lg:px-[44px] py-[12px] sm:py-[14px] md:py-[18px] lg:py-[22px] rounded-[60px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-[95%] md:max-w-[700px] lg:max-w-[820px]">
            <p className="font-grotesk font-medium text-black text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-center leading-snug text-embossed">
              No tab-switching. No co-host. No awkward pause.<br className="hidden sm:block" />
              <span className="font-semibold"> Own every moment on screen.</span>
            </p>
          </div>
        </div>
      </div>

      <EmailSignup />
    </div>
  );
};

export default HeroSection;

