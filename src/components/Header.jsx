import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md ">
      <div className="max-w-[1512px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[56px] sm:h-[64px] md:h-[80px] lg:h-[100px]">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/holdspace-logo.svg" 
              alt="Holdspace" 
              className="h-[32px] sm:h-[40px] md:h-[50px] lg:h-[67px] w-auto"
              style={{ filter: 'invert(1)' }}
            />
          </div>

          {/* Beta Badge - Compact on mobile, full on tablet+ */}
          <div className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[10px] items-center px-[10px] sm:px-[12px] md:px-[16px] lg:px-[20px] py-[5px] sm:py-[6px] md:py-[8px] lg:py-[10px] rounded-[50px] sm:rounded-[60px] md:rounded-[69.005px] bg-gray-100 border border-gray-300">
            <span className="font-mondwest text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-700 hidden sm:inline text-embossed">
              beta version
            </span>
            <div className="flex items-center px-[8px] sm:px-[10px] md:px-[14px] lg:px-[16px] py-[4px] sm:py-[5px] md:py-[7px] lg:py-[8px] rounded-[50px] sm:rounded-[60px] md:rounded-[69.005px] bg-gray-200">
              <span className="font-youth text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-900 text-embossed">
                Early Access
              </span>
            </div>
            <div className="flex gap-[4px] sm:gap-[5px] lg:gap-[6px] items-center">
              <div className="relative shrink-0 size-[5px] sm:size-[6px] lg:size-[7px] rounded-full bg-green-500">
              </div>
              <span className="font-grotesk text-green-600 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[-0.276px] text-embossed">
                coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

