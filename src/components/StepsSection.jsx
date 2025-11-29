import React from 'react';
import { STEPS } from '../constants';

const StepsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-[30px] md:gap-[40px] lg:gap-[80px] mx-auto mt-[60px] md:mt-[100px] lg:mt-[150px] px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10">
      <div className="w-full lg:w-auto lg:flex-shrink-0">
        <h2 className="font-mondwest text-black text-[32px] sm:text-[48px] md:text-[70px] lg:text-[100px] leading-tight lg:leading-[1.2] max-w-full lg:max-w-[629px] text-embossed">
          Present Smarter<br className="sm:hidden" /> in 3 steps
        </h2>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:max-w-[586px]">
        {STEPS.map((step, index) => (
          <div 
            key={index} 
            className="group box-border flex items-center justify-between gap-4 md:gap-5 px-5 sm:px-6 md:px-7 py-4 sm:py-5 md:py-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-200 cursor-default"
          >
            <div className="flex items-center gap-4">
              <div className="bg-black box-border flex h-[44px] sm:h-[48px] md:h-[52px] w-[44px] sm:w-[48px] md:w-[52px] items-center justify-center rounded-xl flex-shrink-0 group-hover:rotate-3 transition-transform duration-200">
                <span className="font-youth text-[16px] sm:text-[18px] md:text-[20px] text-white">
                  {step.number}
                </span>
              </div>
              <span className="font-grotesk font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-black leading-snug">
                {step.title}
              </span>
            </div>
            <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;

