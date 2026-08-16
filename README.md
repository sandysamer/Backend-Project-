# Task Management System Backend

A RESTful backend API for managing users and tasks using Node.js, Express.js, MongoDB, and Mongoose.

## Features

- User registration
- User login with JWT authentication
- Password hashing using bcrypt
- User roles
- Authentication middleware
- Task management CRUD operations
- User profile image upload using Multer
- Uploaded file management and cleanup
- MongoDB integration using Mongoose
- Error handling middleware
- RESTful API structure

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Multer
- dotenv

## Project Structure

```text
TaskManagementSystem/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
├── uploads/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
## Features

- User registration and login
- Password hashing using bcrypt
- JWT authentication
- Task management
- Create, read, update, and delete tasks
- User-specific task access
- Image upload during user registration
- Uploaded file serving through Express
- MongoDB database integration using Mongoose
- Centralized error handling
- Automatic cleanup of uploaded files when needed

## How to Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and add the required configuration for:

- MongoDB connection
- JWT secret
- Application port

### 3. Start the server

```bash
node server.js
```

The server will run on:

http://localhost:5000
