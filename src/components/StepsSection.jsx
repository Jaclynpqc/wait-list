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

      <div className="flex flex-col gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[21px] w-full lg:max-w-[586px]">
        {STEPS.map((step, index) => (
          <div 
            key={index} 
            className="box-border flex items-center justify-between gap-3 md:gap-4 px-[12px] sm:px-[15px] md:px-[18px] lg:px-[20.676px] py-[10px] sm:py-[12px] md:py-[16px] lg:py-[20.581px] rounded-[60px] sm:rounded-[80px] lg:rounded-[103.38px] bg-gray-100 border border-gray-200"
          >
            <span className="font-mondwest text-[13px] sm:text-[15px] md:text-[18px] lg:text-[25px] text-black flex-1 leading-tight text-embossed">
              {step.title}
            </span>
            <div className="bg-black box-border flex h-[36px] sm:h-[40px] md:h-[44px] lg:h-[45.487px] w-[40px] sm:w-[45px] md:w-[55px] lg:w-[65px] items-center justify-center rounded-full flex-shrink-0">
              <span className="font-youth text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[22.744px] text-white">
                {step.number}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;

