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
        className="box-border flex items-center justify-between gap-2 px-[12px] sm:px-[15px] md:px-[18px] lg:px-[20.676px] py-[7px] sm:py-[8px] md:py-[9px] lg:py-[10.338px] rounded-[60px] sm:rounded-[80px] lg:rounded-[103.38px] w-full max-w-[95%] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[586px] bg-gray-100 border border-gray-300"
      >
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
      
      {submitMessage && (
        <p className={`font-grotesk text-sm md:text-base ${submitMessage.includes('error') || submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {submitMessage}
        </p>
      )}
    </div>
  );
};

export default EmailSignup;

