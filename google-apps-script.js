/**
 * Google Apps Script for Holdspace Waitlist
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" > "New deployment"
 * 5. Choose "Web app" as deployment type
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click "Deploy" and copy the Web App URL
 * 9. Paste the URL into your React app's .env file as VITE_GOOGLE_SHEETS_URL
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = new Date();
    
    // If this is the first entry, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Source']);
    }
    
    // Add the new entry
    sheet.appendRow([timestamp, email, 'Waitlist']);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Email successfully added to waitlist!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({ email: 'test@example.com' })
    }
  };
  const result = doPost(testData);
  Logger.log(result.getContent());
}

