import express from 'express';
import session from 'express-session';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js'; // Adjust path to where your user.js file is

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Middleware to read JSON bodies from the frontend
app.use(express.json());

// 2. CORS setup so your React frontend can talk to this backend
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true // REQUIRED so session cookies can be sent back and forth
}));

// 3. Session middleware (This makes req.session work in your login/profile routes)
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_fallback_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // true only if using HTTPS in production
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    }
}));

// 4. Plug your user routes into Express
// This means any route inside user.js will now start with /user
app.use('/user', userRoutes);

// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});