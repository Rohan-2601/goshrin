require('dotenv').config({ path: '.env.local' });
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

async function verifySheets() {
  console.log('Verifying Google Sheets configuration...');
  
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
    console.error('ERROR: Missing environment variables.');
    return;
  }

  try {
    const rawKey = process.env.GOOGLE_PRIVATE_KEY;
    console.log('Key length:', rawKey.length);
    console.log('Key starts with:', rawKey.substring(0, 30));
    console.log('Includes literal \\n:', rawKey.includes('\\n'));
    console.log('Includes actual newline:', rawKey.includes('\n'));
    
    // Attempt fix
    let key = rawKey.replace(/\\n/g, '\n');
    console.log('Processed key length:', key.length);
    console.log('Processed key includes actual newline:', key.includes('\n'));

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    
    console.log('Connecting to Google Sheets...');
    await doc.loadInfo();
    console.log(`Connected to sheet: "${doc.title}"`);

    const sheet = doc.sheetsByIndex[0];
    console.log(`Using tab: "${sheet.title}"`);

    // Check for headers
    try {
        await sheet.loadHeaderRow();
        console.log('Headers loaded successfully.');
    } catch (e) {
        console.log('Headers not found (new sheet?), setting them up...');
        await sheet.setHeaderRow(['id', 'submittedAt', 'name', 'email', 'phone', 'handle', 'type', 'category']);
    }

    // Try adding a test row
    console.log('Attempting to add a test row...');
    const testRow = {
      id: 'TEST-' + Date.now(),
      submittedAt: new Date().toISOString(),
      name: 'Test Setup',
      email: 'test@example.com',
      type: 'verification'
    };
    
    await sheet.addRow(testRow);
    console.log('Test row added successfully!');
    console.log('Integration is working perfectly.');

  } catch (error) {
    console.error('ERROR verifying sheets integration:');
    console.error(error.message);
    if (error.response) {
      console.error('Response data:', JSON.stringify(error.response.data));
    }
  }
}

verifySheets();
