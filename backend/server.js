require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

const authRoutes = require("./routes/authRoutes")
//Middleware to handle cors
app.use (
    cors ({
        origin: process.env.CLIENT_URI || '*',
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

//Connect Database
connectDB();

// Middleware
app.use(express.json())

//Routes
app.use('/api/auth', authRoutes)

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`))