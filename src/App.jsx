import React, { useState, Suspense } from 'react';
import Header from './components/Header';
import FAQItem from './components/FAQItem';
import { submitEmailToWaitlist } from './utils/submitEmail';

// Lazy load Dither to prevent it from crashing the whole app
const Dither = React.lazy(() => import('./components/Dither'));

// Error boundary for Dither
class DitherErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="w-full h-full bg-gradient-to-b from-gray-100 to-white" />;
    }
    return this.props.children;
  }
}

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const result = await submitEmailToWaitlist(email);
    
    if (result.success) {
      setEmail(''); // Clear the input
      setSubmitMessage(result.message);
      // Show success message for 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    } else {
      setSubmitMessage(result.message);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
    
    setIsSubmitting(false);
  };

  const faqs = [
    {
      question: "What is Holdspace?",
      answer: "Holdspace is an online presentation tool that keeps you visible while your slides and visuals appear beside you. It runs in your browser and lets you present with natural hand gestures instead of screen-sharing."
    },
    {
      question: "How does it work?",
      answer: "Holdspace uses your webcam and computer vision to recognize simple hand gestures. You can move between slides, bring up visuals, and highlight key points without touching your keyboard or mouse."
    },
    {
      question: "Do I need special equipment?",
      answer: "No special equipment is needed. Holdspace works with your regular webcam and internet connection. You do not need a VR headset or any external sensors."
    },
    {
      question: "Is it compatible with my platform?",
      answer: "Yes. Holdspace works with Zoom, Google Meet, Microsoft Teams, and other video-conferencing platforms. You can share your Holdspace window or use it as a virtual camera so everyone sees your interactive overlay."
    },
    {
      question: "When will it be available?",
      answer: "Holdspace is currently in private beta. You can join the waitlist on our website to get early access and be the first to try new features when we launch publicly later this year."
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
      {/* Dither Background */}
      <div className="absolute top-0 left-0 w-full h-[800px] sm:h-[900px] md:h-[1100px] lg:h-[1300px] overflow-hidden z-0">
        <DitherErrorBoundary>
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-gray-100 to-white" />}>
            <Dither
              waveColor={[0.5, 0.5, 0.5]}
              disableAnimation={false}
              enableMouseInteraction={true}
              mouseRadius={0.03}
              colorNum={4}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </Suspense>
        </DitherErrorBoundary>
        {/* Gradient Fade Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
      </div>

      {/* Header */}
      <Header />
    
      {/* Hero Section */}
      <div className="flex flex-col gap-[24px] md:gap-[30px] lg:gap-[34px] items-center justify-center mx-auto pt-[100px] md:pt-[140px] lg:pt-[200px] px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col gap-[16px] md:gap-[24px] lg:gap-[30px] items-center justify-center w-full max-w-[889px]">
          {/* Headline */}
          <div className="flex flex-col items-center">
            <h1 className="font-youth text-black text-center leading-tight text-embossed">
              <span className="font-mondwest not-italic text-[40px] sm:text-[56px] md:text-[75px] lg:text-[100px] block sm:inline">AI stage </span>
              <span className="text-[40px] sm:text-[56px] md:text-[65px] lg:text-[80px] block sm:inline">for presenters</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center w-full px-2">
            <div className="bg-white/90 backdrop-blur-sm border-2 border-black px-[20px] sm:px-[28px] md:px-[36px] lg:px-[44px] py-[12px] sm:py-[14px] md:py-[18px] lg:py-[22px] rounded-[60px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-[95%] md:max-w-[700px] lg:max-w-[820px]">
              <p className="font-grotesk font-medium text-black text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-center leading-snug text-embossed">
                No tab-switching. No co-host. No awkward pause.<br className="hidden sm:block" />
                <span className="font-semibold"> Own every moment on screen.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Email Signup */}
        <div className="w-full flex flex-col items-center gap-3">
          <form onSubmit={handleSubmit} className="box-border flex items-center justify-between gap-2 px-[12px] sm:px-[15px] md:px-[18px] lg:px-[20.676px] py-[7px] sm:py-[8px] md:py-[9px] lg:py-[10.338px] rounded-[60px] sm:rounded-[80px] lg:rounded-[103.38px] w-full max-w-[95%] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[586px] bg-gray-100 border border-gray-300">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none font-mondwest text-[20px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-tight md:leading-[24.811px] text-black placeholder-gray-500"
              required
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-black box-border flex h-[34px] sm:h-[38px] md:h-[42px] lg:h-[45.487px] items-center justify-center px-[12px] sm:px-[14px] md:px-[18px] lg:px-[20.676px] rounded-[60px] sm:rounded-[80px] lg:rounded-[103.38px] hover:bg-gray-800 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-youth text-[13px] sm:text-[15px] md:text-[18px] lg:text-[21px] leading-tight md:leading-[22.744px] text-white">
                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
              </span>
            </button>
          </form>
          
          {/* Success/Error Message */}
          {submitMessage && (
            <p className={`font-grotesk text-sm md:text-base ${submitMessage.includes('error') || submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
              {submitMessage}
            </p>
          )}
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="flex items-center justify-center mx-auto mt-[60px] md:mt-[100px] lg:mt-[150px] px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10">
        <div className="bg-gray-100 rounded-xl md:rounded-2xl w-full max-w-[800px] h-[200px] sm:h-[280px] md:h-[360px] lg:h-[450px] flex items-center justify-center border border-gray-200 shadow-lg">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="text-gray-500 font-grotesk text-xs sm:text-sm md:text-base lg:text-lg text-embossed">Come back in a tiny bit. We're working on it</p>
          </div>
        </div>
      </div>

      {/* Present Smarter Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-[30px] md:gap-[40px] lg:gap-[80px] mx-auto mt-[60px] md:mt-[100px] lg:mt-[150px] px-4 md:px-8 lg:px-10 w-full max-w-[1512px] relative z-10">
        {/* Heading */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <h2 className="font-mondwest text-black text-[32px] sm:text-[48px] md:text-[70px] lg:text-[100px] leading-tight lg:leading-[1.2] max-w-full lg:max-w-[629px] text-embossed">
            Present Smarter<br className="sm:hidden" /> in 3 steps
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[21px] w-full lg:max-w-[586px]">
          {steps.map((step, index) => (
            <div key={index} className="box-border flex items-center justify-between gap-3 md:gap-4 px-[12px] sm:px-[15px] md:px-[18px] lg:px-[20.676px] py-[10px] sm:py-[12px] md:py-[16px] lg:py-[20.581px] rounded-[60px] sm:rounded-[80px] lg:rounded-[103.38px] bg-gray-100 border border-gray-200">
              <span className="font-mondwest text-[13px] sm:text-[15px] md:text-[18px] lg:text-[25px] text-black flex-1 leading-tight text-embossed">
                {step.title}
              </span>
              <div className="bg-black box-border flex h-[36px] sm:h-[40px] md:h-[44px] lg:h-[45.487px] w-[40px] sm:w-[45px] md:w-[55px] lg:w-[65px] items-center justify-center rounded-full flex-shrink-0">
                <span className="font-youth text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[22.744px] text-white">
                  {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-[16px] md:gap-[24px] lg:gap-[30px] items-start mx-auto mt-[60px] md:mt-[100px] lg:mt-[200px] w-full max-w-[95%] md:max-w-[700px] lg:max-w-[889px] px-4 md:px-8 lg:px-0 relative z-10">
        {/* FAQ Heading */}
        <div className="w-full">
          <h2 className="font-mondwest text-black text-[40px] sm:text-[56px] md:text-[80px] lg:text-[108px] leading-tight text-embossed">
            FAQ
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] w-full">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer}
              initialOpen={index === 0}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
