import React from 'react';

const VideoPlaceholder = () => {
  return (
    <div className="flex items-center justify-center mx-auto mt-[60px] md:mt-[100px] lg:mt-[150px] pb-[100px] md:pb-0 px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10">
      <div className="bg-gray-100 rounded-xl md:rounded-2xl w-full max-w-[800px] h-[200px] sm:h-[280px] md:h-[360px] lg:h-[450px] flex items-center justify-center border border-gray-200 shadow-lg">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p className="text-gray-500 font-grotesk text-xs sm:text-sm md:text-base lg:text-lg text-embossed">
            Come back in a tiny bit. We're working on it
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaceholder;

