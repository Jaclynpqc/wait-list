import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] items-start w-full border-b border-gray-200 pb-[20px] md:pb-[25px] lg:pb-[30px]" data-name="FAQ's Component">
      <div className="flex items-center justify-between w-full gap-4" data-name="Container">
        <p className="font-youth leading-normal not-italic text-[18px] md:text-[22px] lg:text-[25px] text-black tracking-[-0.28px] flex-1">
          {question}
        </p>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="block cursor-pointer relative shrink-0 w-[24px] h-[24px] md:w-[28px] md:h-[28px] hover:opacity-70 transition-opacity" 
          data-name="Toggle"
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className={`w-full h-[2px] bg-black absolute top-1/2 left-0 transform -translate-y-1/2 transition-transform ${isOpen ? 'rotate-0' : 'rotate-0'}`}></div>
          <div className={`w-[2px] h-full bg-black absolute left-1/2 top-0 transform -translate-x-1/2 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        </button>
      </div>
      {isOpen && (
        <p className="font-inter font-light leading-relaxed not-italic text-[14px] md:text-[16px] lg:text-[18px] text-gray-700 w-full">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;

