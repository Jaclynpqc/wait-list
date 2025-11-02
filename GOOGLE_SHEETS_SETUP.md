# Google Sheets Integration Setup

Follow these steps to connect your waitlist form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Holdspace Waitlist" (or any name you prefer)
4. The sheet will automatically create headers when the first email is submitted

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code in the editor
3. Copy the entire contents of `google-apps-script.js` from this project
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) and name your project (e.g., "Waitlist Handler")

## Step 3: Deploy the Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Waitlist API v1" (or any description)
   - **Execute as**: Select **Me** (your account)
   - **Who has access**: Select **Anyone**
5. Click **Deploy**
6. Review permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/ABC.../exec`)

## Step 4: Configure Your React App

1. Open the `.env` file in your project root
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with your actual Web App URL:
   ```
   VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Save the file
4. Restart your development server:
   ```bash
   npm run dev
   ```

## Step 5: Test the Integration

1. Go to your site at `http://localhost:5173`
2. Enter a test email address
3. Click "Join Waitlist"
4. Check your Google Sheet - you should see a new row with:
   - Timestamp
   - Email address
   - Source ("Waitlist")

## Your Google Sheet Structure

The sheet will automatically have these columns:
- **Column A**: Timestamp (when the email was submitted)
- **Column B**: Email (the submitted email address)
- **Column C**: Source (always "Waitlist" for this form)

## Troubleshooting

**"Configuration error" message:**
- Make sure you've set the `VITE_GOOGLE_SHEETS_URL` in your `.env` file
- Restart your dev server after changing `.env`

**Emails not appearing in sheet:**
- Check that you deployed the script as "Web app" (not "API Executable")
- Verify "Who has access" is set to "Anyone"
- Make sure you authorized the script with your Google account

**CORS errors in console:**
- This is normal! We use `no-cors` mode which prevents reading responses
- The emails will still be saved to your sheet

## Data Privacy

- All data is stored in your personal Google Sheet
- Only you have access to the spreadsheet
- No third-party services involved
- You can export or delete data anytime

## Next Steps

Once you have submissions, you can:
- Export to CSV for email marketing tools
- Set up email notifications for new signups
- Add more fields to collect additional information
- Create charts and analytics in Google Sheets

