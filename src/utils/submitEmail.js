/**
 * Submit email to Google Sheets via Apps Script
 * @param {string} email - The email address to submit
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitEmailToWaitlist(email) {
  const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
  
  if (!googleSheetsUrl || googleSheetsUrl === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
    console.error('Google Sheets URL not configured. Please set VITE_GOOGLE_SHEETS_URL in your .env file');
    return {
      success: false,
      message: 'Configuration error. Please contact support.'
    };
  }

  try {
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors mode
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        timestamp: new Date().toISOString()
      })
    });

    // Note: With no-cors mode, we can't read the response
    // But the request will still work
    return {
      success: true,
      message: 'Thank you for joining our waitlist! We\'ll be in touch soon.'
    };
  } catch (error) {
    console.error('Error submitting to waitlist:', error);
    return {
      success: false,
      message: 'There was an error. Please try again.'
    };
  }
}

