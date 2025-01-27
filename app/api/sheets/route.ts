import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required environment variables
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      throw new Error('Missing required environment variables');
    }

    // Properly format the private key
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
        type: 'service_account'
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Validate data before sending to Google Sheets
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('Missing required fields in form data');
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Contacts!A:F', // Make sure this sheet exists
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          data.name,
          data.email,
          data.subject,
          data.phone || '',
          data.message,
          new Date().toISOString()
        ]]
      }
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error('Detailed API Error:', {
      message: error.message,
      stack: error.stack,
      details: error.response?.data || error
    });

    console.error('API Error Details:', {
      error: error,
      message: error.message,
      stack: error.stack,
      privateKeyPresent: !!process.env.GOOGLE_PRIVATE_KEY,
      privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
      sheetId: process.env.GOOGLE_SHEET_ID
    });

    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update sheet',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
