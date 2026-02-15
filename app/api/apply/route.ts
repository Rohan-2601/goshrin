import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Prepare Data Object
    const isBrand = data.type === 'brand';

    const newApplication = {
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      handle: data.handle,
      type: data.type,
      category: data.category
    };

    // 2. Save to Google Sheets (if configured)
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
      try {
        const serviceAccountAuth = new JWT({
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0]; // Use the first sheet

        // Check for headers (handle empty sheet)
        try {
          await sheet.loadHeaderRow();
        } catch (e) {
          await sheet.setHeaderRow(['id', 'submittedAt', 'name', 'email', 'phone', 'Brand Name', 'Social Handle', 'type', 'category']);
        }

        await sheet.addRow(newApplication);
      } catch (sheetError) {
        console.error('Google Sheets Error:', sheetError);
        // We continue execution to ensure local save still works if Sheets fails
      }
    }

    // 3. Save to Local File (Backup / Dev)
    const filePath = path.join(process.cwd(), 'data', 'applications.json');
    const dirPath = path.join(process.cwd(), 'data');

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    let applications = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        applications = JSON.parse(fileContent);
      } catch (e) {
        applications = [];
      }
    }

    applications.push(newApplication);
    fs.writeFileSync(filePath, JSON.stringify(applications, null, 2));

    return NextResponse.json({ success: true, message: 'Application saved' });
  } catch (error) {
    console.error('Error saving application:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

