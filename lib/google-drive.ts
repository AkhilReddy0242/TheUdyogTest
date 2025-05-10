import { google, drive_v3 } from 'googleapis';
import { Readable } from 'stream';

// Define the required scopes for Google Drive API
const SCOPES = ['https://www.googleapis.com/auth/drive'];

// Validate environment variables
if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
  throw new Error('Missing required environment variables: GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY');
}

// Initialize Google Auth with service account credentials
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Ensure proper formatting of private key
  },
  scopes: SCOPES,
});

// Initialize Google Drive API
const drive = google.drive({ version: 'v3', auth });

// Define the return type for the uploadToDrive function
interface UploadToDriveResponse {
  fileId: string;
  webViewLink: string;
}

/**
 * Uploads a file to Google Drive and makes it publicly accessible.
 * @param fileBuffer - The file content as a Buffer.
 * @param fileName - The name of the file.
 * @param mimeType - The MIME type of the file.
 * @returns An object containing the file ID and web view link.
 * @throws An error if the upload fails.
 */
export async function uploadToDrive(
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string
): Promise<UploadToDriveResponse> {
  // Define file metadata
  const fileMetadata: drive_v3.Schema$File = {
    name: fileName,
    mimeType: mimeType,
  };

  // Define media for the file upload
  const media = {
    mimeType: mimeType,
    body: Readable.from(fileBuffer), // Convert Buffer to a readable stream
  };

  try {
    // Upload the file to Google Drive
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, webViewLink', // Specify the fields to return
    });

    if (!response.data.id) {
      throw new Error('Failed to upload file: No file ID returned from Google Drive.');
    }

    // Make the file publicly accessible
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    // Return the file ID and web view link
    return {
      fileId: response.data.id,
      webViewLink: response.data.webViewLink || '', // Fallback to empty string if webViewLink is undefined
    };
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    throw new Error(`Failed to upload file: ${fileName}. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}