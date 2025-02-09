# Project README

## Overview

This project is a web application built with Next.js that provides functionalities for user registration, login, course management, and placement services. It utilizes a serverless architecture with API routes for handling backend logic, including user authentication and file uploads.

## Features

- User registration and login
- Admin registration
- Course creation and management
- File uploads for resumes and course resources
- Integration with Google Sheets for data storage
- Responsive UI built with React components

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **MongoDB**: A NoSQL database for storing user and course data.
- **JWT**: JSON Web Tokens for secure user authentication.
- **Google Sheets API**: For storing and managing data in Google Sheets.
- **Zod**: A TypeScript-first schema declaration and validation library.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- Google Cloud account for Google Sheets API

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root of the project and add the following variables:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ADMIN_REGISTRATION_CODE=your_admin_registration_code
   GOOGLE_CLIENT_EMAIL=your_google_client_email
   GOOGLE_PRIVATE_KEY=your_google_private_key
   GOOGLE_SHEET_ID=your_google_sheet_id
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

To start the production server, run:

```bash
npm start
```

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.
- **POST /api/admin/register**: Register a new admin user.

### Courses

- **GET /api/courses**: Retrieve a list of courses.
- **POST /api/courses**: Create a new course.

### Google Sheets

- **POST /api/sheets**: Append data to a Google Sheet.

## File Uploads

Files such as resumes and course resources can be uploaded during user registration and course creation. The application currently uses a temporary directory for file uploads, which is suitable for serverless environments.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Thanks to the Next.js community for their support and resources.
- Special thanks to the contributors of the libraries used in this project.

---

Feel free to customize this README file according to your project's specific details and requirements!
