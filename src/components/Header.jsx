import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8 pt-3 sm:pt-4">
      <div className="w-full bg-white/40 backdrop-blur-xl border border-white/50 rounded-[20px] sm:rounded-[24px] md:rounded-[30px] lg:rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-3.5 md:py-4 lg:py-5">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/holdspace-logo.svg" 
              alt="Holdspace" 
              className="h-[24px] sm:h-[28px] md:h-[32px] lg:h-[40px] w-auto"
              style={{ filter: 'invert(1)' }}
            />
          </div>

          {/* Beta Badge Content */}
          <div className="flex gap-[6px] sm:gap-[8px] md:gap-[10px] lg:gap-[12px] items-center">
            <span className="font-mondwest text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-700 hidden sm:inline text-embossed">
              beta version
            </span>
            <div className="flex items-center px-[10px] sm:px-[12px] md:px-[16px] lg:px-[18px] py-[5px] sm:py-[6px] md:py-[8px] lg:py-[9px] rounded-full bg-white/60 backdrop-blur-sm border border-white/40">
              <span className="font-youth text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-900 text-embossed">
                Early Access
              </span>
            </div>
            <div className="flex gap-[4px] sm:gap-[5px] lg:gap-[6px] items-center">
              <div className="relative shrink-0 size-[5px] sm:size-[6px] lg:size-[7px] rounded-full bg-green-500 animate-pulse"></div>
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

