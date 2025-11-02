import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col gap-[4px] items-start w-full" data-name="FAQ's Component">
      <div className="flex items-center justify-between w-full" data-name="Container">
        <p className="font-youth leading-normal not-italic text-[14px] text-primary-light tracking-[-0.28px] w-[352px]">
          {question}
        </p>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="block cursor-pointer overflow-clip relative shrink-0 size-[20px]" 
          data-name="Toggle"
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2">
            <div className="absolute inset-[-1px_-8.57%]">
              <img alt="" className="block max-w-none size-full" src="/80834627f77373ed66bc1dd31910a30b3f486d84.svg" />
            </div>
          </div>
        </button>
      </div>
      {isOpen && (
        <p className="font-inter font-light leading-normal not-italic text-[12px] text-primary-light tracking-[-0.24px] w-full">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;

