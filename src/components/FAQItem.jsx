import React, { useState } from 'react';

const FAQItem = ({ question, answer, initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col items-start w-full border-b border-gray-200 pb-[16px] md:pb-[20px] lg:pb-[30px] cursor-pointer rounded-lg px-3 py-2 -mx-3 transition-colors duration-200 hover:bg-gray-100/70" 
      data-name="FAQ's Component"
    >
      <div className="flex items-center justify-between w-full gap-3 md:gap-4" data-name="Container">
        <p className="font-youth leading-snug not-italic text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] text-black tracking-[-0.28px] flex-1 text-embossed">
          {question}
        </p>
        <div 
          className="block relative shrink-0 w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px] lg:w-[28px] lg:h-[28px] flex-shrink-0" 
          data-name="Toggle"
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className={`w-full h-[2px] bg-black absolute top-1/2 left-0 transform -translate-y-1/2 transition-transform ${isOpen ? 'rotate-0' : 'rotate-0'}`}></div>
          <div className={`w-[2px] h-full bg-black absolute left-1/2 top-0 transform -translate-x-1/2 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}></div>
        </div>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-[10px] md:mt-[14px] lg:mt-[20px]' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <p className="font-inter font-light leading-relaxed not-italic text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-700 w-full pr-6 md:pr-8 text-embossed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;

