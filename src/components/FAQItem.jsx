import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col gap-[10px] md:gap-[14px] lg:gap-[20px] items-start w-full border-b border-gray-200 pb-[16px] md:pb-[20px] lg:pb-[30px]" data-name="FAQ's Component">
      <div className="flex items-center justify-between w-full gap-3 md:gap-4" data-name="Container">
        <p className="font-youth leading-snug not-italic text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] text-black tracking-[-0.28px] flex-1">
          {question}
        </p>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="block cursor-pointer relative shrink-0 w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px] lg:w-[28px] lg:h-[28px] hover:opacity-70 transition-opacity flex-shrink-0" 
          data-name="Toggle"
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className={`w-full h-[2px] bg-black absolute top-1/2 left-0 transform -translate-y-1/2 transition-transform ${isOpen ? 'rotate-0' : 'rotate-0'}`}></div>
          <div className={`w-[2px] h-full bg-black absolute left-1/2 top-0 transform -translate-x-1/2 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        </button>
      </div>
      {isOpen && (
        <p className="font-inter font-light leading-relaxed not-italic text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-700 w-full pr-6 md:pr-8">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;

