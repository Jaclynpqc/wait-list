import React from 'react';
import FAQItem from './FAQItem';
import { FAQS } from '../constants';

const FAQSection = () => {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[24px] lg:gap-[30px] items-start mx-auto mt-[60px] md:mt-[100px] lg:mt-[200px] w-full max-w-[95%] md:max-w-[700px] lg:max-w-[889px] px-4 md:px-8 lg:px-0 relative z-10">
      <div className="w-full">
        <h2 className="font-mondwest text-black text-[40px] sm:text-[56px] md:text-[80px] lg:text-[108px] leading-tight text-embossed">
          FAQ
        </h2>
      </div>

      <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] w-full pb-[200px]">
        {FAQS.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer}
            initialOpen={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

