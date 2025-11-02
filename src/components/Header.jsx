import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b">
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
          <div className="flex gap-[4px] sm:gap-[5.52px] items-center px-[8px] sm:px-[10px] md:px-[13.801px] py-[4px] sm:py-[5px] md:py-[6.901px] rounded-[50px] sm:rounded-[60px] md:rounded-[69.005px] bg-gray-100 border border-gray-300 text-xs sm:text-sm">
            <span className="font-mondwest text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13.801px] text-gray-700 hidden sm:inline">
              beta version
            </span>
            <div className="flex items-center px-[6px] sm:px-[10px] md:px-[13.801px] py-[3px] sm:py-[4px] md:py-[6px] lg:py-[7.181px] rounded-[50px] sm:rounded-[60px] md:rounded-[69.005px] bg-gray-200">
              <span className="font-youth text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13.801px] text-gray-900">
                Dec 2025
              </span>
            </div>
            <div className="flex gap-[3px] sm:gap-[4.83px] items-center">
              <div className="relative shrink-0 size-[4px] sm:size-[5px] lg:size-[5.52px] rounded-full bg-green-500">
              </div>
              <span className="font-grotesk text-green-600 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13.801px] tracking-[-0.276px]">
                early access
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

