# Rajhans Dashboard

## MongoDB Authentication Setup

This project uses MongoDB for user authentication. Follow these steps to set up:

1. Install MongoDB locally or use MongoDB Atlas (cloud service)
2. Create a `.env.local` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=rajhans-dashboard
JWT_SECRET=your_secure_jwt_secret
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.
For local MongoDB, it might look like: `mongodb://localhost:27017/rajhans-dashboard`

For MongoDB Atlas, it will look like: `mongodb+srv://username:password@cluster.mongodb.net/rajhans-dashboard`

## Features

- Modern UI with Tailwind CSS
- Mock authentication system (frontend only)
- Dashboard metrics visualization
- Customer management interface
- Loan and EMI tracking
- Vehicle management

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Authentication Flow

1. Users can sign up with name, email, and password
2. Passwords are securely hashed using bcrypt before storing in MongoDB
3. On login, JWT tokens are generated and stored in localStorage
4. Protected routes require authentication

## Environment Variables

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_APP_NAME=Rajhans Motor Dashboard
```
