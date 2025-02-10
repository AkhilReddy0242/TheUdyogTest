import { google } from 'googleapis';
import { Readable } from 'stream';

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_id: process.env.GOOGLE_CLIENT_ID,
    type: 'service_account'
  },
  scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

export async function uploadToDrive(fileBuffer: Buffer, fileName: string, mimeType: string) {
  const fileMetadata = {
    name: fileName,
    mimeType: mimeType,
  };

  const media = {
    mimeType: mimeType,
    body: Readable.from(fileBuffer),
  };

  try {
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, webViewLink',
    });

    // Make the file publicly accessible
    await drive.permissions.create({
      fileId: response.data.id!,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    return {
      fileId: response.data.id,
      webViewLink: response.data.webViewLink,
    };
  } catch (error) {
    console.error("Error uploading to Google Drive:", error);
    throw new Error(`Failed to upload file: ${fileName}. Error: ${error}`);
  }
}