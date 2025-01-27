import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log( process.env.GOOGLE_CLIENT_EMAIL)
    console.log(`Data from env = ${process.env.GOOGLE_PRIVATE_KEY}`)
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    console.log(`GOogle Sheet ID = ${ process.env.GOOGLE_SHEET_ID}`)
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Contacts!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          data.name,
          data.email,
          data.subject,
          data.phone,
          data.message,
          new Date().toISOString()
        ]]
      }
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update sheet' },
      { status: 500 }
    );
  }
}
