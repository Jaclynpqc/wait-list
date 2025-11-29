import React from 'react';
import Header from './components/Header';
import DitherBackground from './components/DitherBackground';
import HeroSection from './components/HeroSection';
import VideoPlaceholder from './components/VideoPlaceholder';
import StepsSection from './components/StepsSection';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <div className="bg-white min-h-screen relative w-full overflow-x-hidden">
      <DitherBackground />
      <Header />
      <HeroSection />
      <VideoPlaceholder />
      <StepsSection />
      <FAQSection />
    </div>
  );
}

export default App;
