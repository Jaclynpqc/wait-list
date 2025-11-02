import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQItem from './components/FAQItem';
import Dither from './components/Dither';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Thank you for joining the waitlist!');
  };

  const faqs = [
    {
      question: "What is Holdspace?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "How does it work?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "Do I need special equipment?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "Is it compatible with my platform?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    },
    {
      question: "When will it be available?",
      answer: "Holdspace is a browser-based presentation overlay that lets you stay visible while your content appears beside you—no screen-sharing required"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Upload your materials before meetings"
    },
    {
      number: "02",
      title: "Step into the frame and start present"
    },
    {
      number: "03",
      title: "Use hand gestures to control your materials"
    }
  ];

  return (
    <div className="bg-white min-h-screen relative w-full overflow-x-hidden">
      {/* Interactive Dither Background - Full Screen */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none opacity-15 z-0">
        <Dither
          waveColor={[0.9, 0.9, 0.9]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Header */}
      <Header />
    
      {/* Hero Section */}
      <div className="flex flex-col gap-[34px] items-center justify-center mx-auto pt-[120px] md:pt-[150px] lg:pt-[200px] px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col gap-[20px] md:gap-[30px] items-center justify-center w-full max-w-[889px]">
          {/* Headline */}
          <div className="flex flex-col items-center">
            <h1 className="font-youth text-black text-center leading-tight">
              <span className="font-mondwest not-italic text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px]">AI stage </span>
              <span className="text-[48px] sm:text-[64px] md:text-[70px] lg:text-[80px]">for presenters</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="font-grotesk text-black text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-center leading-relaxed max-w-[90%] md:max-w-[806px]">
            <p>No tab-switching. No co-host. No awkward pause. Own every moment on screen.</p>
          </div>
        </div>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="box-border flex items-center justify-between gap-2 px-[15px] md:px-[18px] lg:px-[20.676px] py-[8px] md:py-[10px] lg:py-[10.338px] rounded-[103.38px] w-full max-w-[95%] md:max-w-[520px] lg:max-w-[586px] bg-gray-100 border border-gray-300">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-none outline-none font-mondwest text-[14px] md:text-[16px] lg:text-[18px] leading-[24.811px] text-black placeholder-gray-500"
            required
          />
          <button type="submit" className="bg-black box-border flex h-[40px] md:h-[44px] lg:h-[45.487px] items-center justify-center px-[16px] md:px-[18px] lg:px-[20.676px] rounded-[103.38px] hover:bg-gray-800 transition-all whitespace-nowrap">
            <span className="font-youth text-[16px] md:text-[19px] lg:text-[21px] leading-[22.744px] text-white">Join Waitlist</span>
          </button>
        </form>
      </div>

      {/* Video Placeholder */}
      <div className="flex items-center justify-center mx-auto mt-[100px] md:mt-[150px] px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10">
        <div className="bg-gray-100 rounded-2xl w-full max-w-[1251px] h-[400px] md:h-[600px] lg:h-[729px] flex items-center justify-center border border-gray-200 shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="text-gray-500 font-grotesk text-lg md:text-xl">Watch Demo Video</p>
          </div>
        </div>
      </div>

      {/* Present Smarter Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[80px] mx-auto mt-[100px] md:mt-[150px] px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10">
        {/* Heading */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <h2 className="font-mondwest text-black text-[48px] md:text-[80px] lg:text-[100px] leading-tight lg:leading-[1.2] max-w-[629px]">
            Present Smarter in 3 steps
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-[20px] md:gap-[25px] lg:gap-[21px] w-full lg:max-w-[586px]">
          {steps.map((step, index) => (
            <div key={index} className="box-border flex items-center justify-between gap-4 px-[15px] md:px-[18px] lg:px-[20.676px] py-[12px] md:py-[14px] lg:py-[20.581px] rounded-[103.38px] bg-gray-100 border border-gray-200">
              <span className="font-mondwest text-[16px] md:text-[20px] lg:text-[25px] text-black flex-1">
                {step.title}
              </span>
              <div className="bg-black box-border flex h-[40px] md:h-[44px] lg:h-[45.487px] w-[50px] md:w-[60px] lg:w-[65px] items-center justify-center rounded-full">
                <span className="font-youth text-[18px] md:text-[20px] lg:text-[21px] leading-[22.744px] text-white">
                  {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-[20px] md:gap-[30px] items-start mx-auto mt-[100px] md:mt-[150px] lg:mt-[200px] w-full max-w-[95%] md:max-w-[700px] lg:max-w-[889px] px-4 md:px-8 lg:px-0 relative z-10">
        {/* FAQ Heading */}
        <div className="w-full">
          <h2 className="font-mondwest text-black text-[50px] md:text-[80px] lg:text-[108px] leading-tight">
            FAQ
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px] w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer className="flex flex-col gap-[20px] md:gap-[28px] lg:gap-[35px] items-start mx-auto mt-[80px] md:mt-[100px] lg:mt-[120px] pb-[30px] md:pb-[40px] lg:pb-[50px] w-full max-w-[95%] md:max-w-[1200px] lg:max-w-[1432px] px-4 md:px-6 lg:px-10" />
    </div>
  );
}

export default App;
