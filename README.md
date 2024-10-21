# aenzbiFintech

This is a Fintech application built with a React Native frontend and a Node.js backend. It integrates features like user authentication, money transfer, bill payments, and card management.

## Project Structure

- **backend/**: Node.js with Express and MongoDB for the backend API.
- **frontend/**: React Native app with Redux for state management.

## Backend Environment Variables

```
PORT=5000
DB_CONNECTION=mongodb://localhost:27017/aenzbiFintechDB
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Setup Instructions

1. Install Node.js dependencies:
   ```
   cd backend
   npm install
   ```

2. Install React Native dependencies:
   ```
   cd frontend/aenzbiFintech
   npm install
   ```

3. Run the backend:
   ```
   cd backend
   npm start
   ```

4. Run the frontend:
   ```
   cd frontend/aenzbiFintech
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```
# aenzbiFintech
# aenzbiFintech
