import React, { useState } from 'react';
import Footer from './components/Footer';
import FAQItem from './components/FAQItem';

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
      <div className="absolute aspect-[1280/1313] top-[-69px] left-0 mix-blend-difference opacity-70 w-full max-w-[1280px]" data-name="Adobe Express - file (2) 4" data-node-id="183:319">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt="" 
            className="absolute h-[119.65%] left-[-16.64%] max-w-none top-[-5.48%] w-[122.73%]" 
            src="/5e2b0885494e9600036ae7b5126c4ba5ed793929.png" 
          />
        </div>
      </div>

      {/* Watch Demo Button */}
      <div className="absolute top-[200px] right-[479px] z-10">
        <button className="box-border flex items-center justify-between px-[13.801px] py-[6.901px] rounded-[69.005px] w-[304px] backdrop-blur-[23.462px] bg-[rgba(149,149,149,0.25)]">
          <div className="flex flex-col font-grotesk justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden text-[24px] text-[rgba(255,255,255,0.96)] text-nowrap">
            <p className="leading-[16.561px] overflow-ellipsis overflow-hidden whitespace-pre">Watch Demo Video</p>
          </div>
          <div className="relative shrink-0 size-[39px]">
            <img alt="Play" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src="/cc4a856aea4bec874cfc811cd5d90993f7feff46.png" />
          </div>
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col gap-[10px] items-center justify-center mx-auto pt-[150px] w-[626px] relative z-10">
        {/* Beta Badge */}
        <div className="box-border flex gap-[5.52px] items-center px-[13.801px] py-[6.901px] rounded-[69.005px] backdrop-blur-[23.462px] bg-[rgba(149,149,149,0.25)]">
          <div className="flex flex-col font-mondwest justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden text-[13.801px] text-[rgba(255,255,255,0.96)] text-nowrap">
            <p className="leading-[16.561px] overflow-ellipsis overflow-hidden whitespace-pre">beta version</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="box-border flex h-[30.362px] items-center overflow-clip px-[13.801px] py-0 rounded-[69.005px] bg-[rgba(255,255,255,0.07)]">
              <div className="flex flex-col font-youth justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden text-[13.801px] text-[rgba(255,255,255,0.96)] text-nowrap">
                <p className="leading-[15.181px] overflow-ellipsis overflow-hidden whitespace-pre">November 2025</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[4.83px] items-center">
            <div className="relative shrink-0 size-[5.52px]">
              <img alt="" className="block max-w-none size-full" src="/6d9641c92744215b12a87942faeafb015f0b0202.svg" />
            </div>
            <div className="flex flex-col font-grotesk justify-end leading-[0] not-italic text-accent-green text-[13.801px] text-nowrap tracking-[-0.276px]">
              <p className="leading-normal whitespace-pre">early access</p>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="box-border flex flex-col h-[108px] items-start px-[52px] py-[26px] w-[413px]">
          <div className="absolute flex flex-col font-youth justify-end leading-[0] not-italic text-primary-light text-[0px] text-nowrap translate-y-[82px]">
            <p className="leading-normal whitespace-pre">
              <span className="text-[80px]">{`h   ld`}</span>
              <span className="font-mondwest not-italic text-[100px]">sp</span>
              <span className="font-mondwest not-italic text-[100px]">a</span>
              <span className="font-mondwest not-italic text-[100px]">ce</span>
            </p>
          </div>
          <div className="h-[52.312px] relative shrink-0 w-[53px]">
            <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="/fcafa7b5073045f0dd38591f3c9216ec8e77ce76.png" />
          </div>
        </div>

        {/* Tagline */}
        <div className="flex flex-col font-grotesk justify-end leading-normal min-w-full not-italic text-[#a6a7ab] text-[13.801px] text-center w-[min-content] mt-4">
          <p className="mb-0">{`Be among the first to experiment a new engaging online meeting. `}</p>
          <p>Holdspace keeps you visible and in control — no slides to hide behind, no screen-sharing to juggle.</p>
        </div>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="box-border flex items-center justify-between px-[13.801px] py-[6.901px] rounded-[69.005px] w-[325px] backdrop-blur-[23.462px] bg-[rgba(149,149,149,0.25)]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-none outline-none font-mondwest text-[13.801px] text-[rgba(255,255,255,0.96)] placeholder-[rgba(255,255,255,0.96)]"
            required
          />
          <button type="submit" className="bg-[#ede7e1] box-border flex h-[30.362px] items-center overflow-clip px-[13.801px] py-0 rounded-[69.005px]">
            <div className="flex flex-col font-youth justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden text-[13.801px] text-black text-nowrap">
              <p className="leading-[15.181px] overflow-ellipsis overflow-hidden whitespace-pre">Join Waitlist</p>
            </div>
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-[12px] items-center mx-auto mt-[200px] w-[482px] relative z-10">
        <div className="flex flex-col font-mondwest justify-end leading-[0] not-italic text-primary-light text-[80px] text-center w-full">
          <p className="leading-normal">FAQ</p>
        </div>
        <div className="box-border flex flex-col gap-[30px] items-start overflow-clip px-[22px] py-[30px] w-full" data-name="FAQ List">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer className="flex flex-col gap-[35px] items-start mx-auto mt-[100px] pb-[50px] w-[1074.83px]" />
    </div>
  );
}

export default App;

