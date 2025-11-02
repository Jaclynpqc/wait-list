import React, { useState } from 'react';
import Footer from './components/Footer';
import FAQItem from './components/FAQItem';
import Dither from './components/Dither';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    alert('Thank you for joining the waitlist!');
  };

  const faqs = [
    {
      question: "What is Holdspace?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "What is Holdspace?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "What is Holdspace?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "What is Holdspace?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "What is Holdspace?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "What is Holdspace?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    }
  ];

  return (
    <div className="bg-[#1a1a1a] min-h-screen relative w-full overflow-x-hidden" data-name="Desktop" data-node-id="183:305">
      {/* Background Image */}
      <div className="absolute top-[-69px] lg:top-[-69px] md:top-[-5px] sm:top-0 left-0 mix-blend-difference opacity-70 w-full max-w-full lg:max-w-[1280px] md:max-w-[800px] sm:max-w-[375px]" data-name="Adobe Express - file (2) 4" data-node-id="183:319">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt="" 
            className="absolute h-[119.65%] left-[-16.64%] max-w-none top-[-5.48%] w-[122.73%]" 
            src="/5e2b0885494e9600036ae7b5126c4ba5ed793929.png" 
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col gap-[10px] items-center justify-center mx-auto pt-[100px] md:pt-[150px] lg:pt-[150px] px-4 md:px-8 lg:px-0 w-full relative z-10">
        {/* Interactive Dither Background */}
        <div className="absolute inset-0 w-full h-[800px] -z-10 opacity-30">
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
        
        {/* Beta Badge */}
        <div className="box-border flex gap-[5.52px] items-center px-[10px] md:px-[12px] lg:px-[13.801px] py-[5px] md:py-[6px] lg:py-[6.901px] rounded-[69.005px] backdrop-blur-[23.462px] bg-[rgba(149,149,149,0.25)] flex-wrap justify-center">
          <span className="font-mondwest text-[11px] md:text-[12px] lg:text-[13.801px] text-[rgba(255,255,255,0.96)]">beta version</span>
          <div className="flex items-center px-[10px] md:px-[12px] lg:px-[13.801px] py-[4px] md:py-[5px] lg:py-[6px] rounded-[69.005px] bg-[rgba(255,255,255,0.07)]">
            <span className="font-youth text-[11px] md:text-[12px] lg:text-[13.801px] text-[rgba(255,255,255,0.96)]">November 2025</span>
          </div>
          <div className="flex gap-[4.83px] items-center">
            <div className="relative shrink-0 size-[4px] md:size-[5px] lg:size-[5.52px]">
              <img alt="" className="block max-w-none size-full" src="/6d9641c92744215b12a87942faeafb015f0b0202.svg" />
            </div>
            <span className="font-grotesk text-accent-green text-[11px] md:text-[12px] lg:text-[13.801px] tracking-[-0.276px]">early access</span>
          </div>
        </div>

        {/* Logo */}
        <div className="relative flex items-center justify-center my-4 md:my-6 lg:my-8">
          <img 
            alt="Holdspace Logo" 
            className="w-[200px] h-auto md:w-[300px] lg:w-[413px]" 
            src="/holdspace-logo.svg" 
          />
        </div>

        {/* Tagline */}
        <div className="font-grotesk text-[#a6a7ab] text-[11px] md:text-[12px] lg:text-[13.801px] text-center leading-normal max-w-full px-2">
          <p className="mb-0">Be among the first to experiment a new engaging online meeting. Holdspace keeps you visible and in control — no slides to hide behind, no screen-sharing to juggle.</p>
        </div>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="mt-4 box-border flex items-center justify-between px-[10px] md:px-[12px] lg:px-[13.801px] py-[5px] md:py-[6px] lg:py-[6.901px] rounded-[69.005px] w-full max-w-[280px] md:max-w-[300px] lg:max-w-[325px] backdrop-blur-[23.462px] bg-[rgba(149,149,149,0.25)]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-none outline-none font-mondwest text-[11px] md:text-[12px] lg:text-[13.801px] text-[rgba(255,255,255,0.96)] placeholder-[rgba(255,255,255,0.6)]"
            required
          />
          <button type="submit" className="bg-[#ede7e1] box-border flex h-[26px] md:h-[28px] lg:h-[30.362px] items-center justify-center px-[10px] md:px-[12px] lg:px-[13.801px] rounded-[69.005px] hover:bg-[#ddd7d1] transition-all ml-2">
            <span className="font-youth text-[11px] md:text-[12px] lg:text-[13.801px] text-black whitespace-nowrap">Join Waitlist</span>
          </button>
        </form>

        {/* Watch Demo Button */}
        <button className="mt-10 box-border flex items-center justify-between px-[12px] md:px-[13.801px] py-[6px] md:py-[6.901px] rounded-[69.005px] w-full max-w-[280px] md:max-w-[300px] lg:max-w-[304px] backdrop-blur-[23.462px] bg-[rgba(149,149,149,0.25)] hover:bg-[rgba(149,149,149,0.35)] transition-all">
          <span className="font-grotesk text-[16px] md:text-[20px] lg:text-[24px] text-[rgba(255,255,255,0.96)]">Watch Demo Video</span>
          <div className="relative shrink-0 size-[30px] md:size-[35px] lg:size-[39px]">
            <img alt="Play" className="w-full h-full object-contain" src="/cc4a856aea4bec874cfc811cd5d90993f7feff46.png" />
          </div>
        </button>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-[12px] items-center mx-auto mt-[100px] md:mt-[150px] lg:mt-[200px] w-full max-w-[375px] md:max-w-[482px] lg:w-[482px] px-4 md:px-0 relative z-10">
        <div className="flex flex-col font-mondwest justify-end leading-[0] not-italic text-primary-light text-[50px] md:text-[65px] lg:text-[80px] text-center w-full">
          <p className="leading-normal">FAQ</p>
        </div>
        <div className="box-border flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px] items-start overflow-clip px-[15px] md:px-[18px] lg:px-[22px] py-[20px] md:py-[25px] lg:py-[30px] w-full" data-name="FAQ List">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer className="flex flex-col gap-[20px] md:gap-[28px] lg:gap-[35px] items-start mx-auto mt-[80px] md:mt-[90px] lg:mt-[100px] pb-[30px] md:pb-[40px] lg:pb-[50px] w-full max-w-[338px] md:max-w-[776px] lg:w-[1074.83px] px-4 md:px-6 lg:px-0" />
    </div>
  );
}

export default App;

