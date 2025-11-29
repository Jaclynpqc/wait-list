import React, { useState } from 'react';
import { submitEmailToWaitlist } from '../utils/submitEmail';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const result = await submitEmailToWaitlist(email);
    
    if (result.success) {
      setEmail('');
      setSubmitMessage(result.message);
      setTimeout(() => setSubmitMessage(''), 5000);
    } else {
      setSubmitMessage(result.message);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <form 
        onSubmit={handleSubmit} 
        className="group box-border flex items-center justify-between gap-3 px-2 sm:px-3 py-2 rounded-2xl w-full max-w-[95%] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[560px] bg-white/80 backdrop-blur-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent border-none outline-none font-grotesk text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-tight text-black placeholder-gray-400 px-3 py-2"
          required
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-black box-border flex h-[40px] sm:h-[44px] md:h-[48px] items-center justify-center px-5 sm:px-6 md:px-8 rounded-xl hover:bg-gray-900 active:scale-95 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="font-youth text-[13px] sm:text-[14px] md:text-[16px] text-white">
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </span>
        </button>
      </form>
      
      {submitMessage && (
        <p className={`font-grotesk text-sm md:text-base ${submitMessage.includes('error') || submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {submitMessage}
        </p>
      )}
    </div>
  );
};

export default EmailSignup;

