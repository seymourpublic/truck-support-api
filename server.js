const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors({
    origin: '*',  // Allows all origins (Postman, frontend, etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Handles form-data requests

app.use((req, res, next) => {
    console.log(`📢 ${req.method} Request to ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

connectDB();

app.use('/tickets', require('./routes/tickets'));

app.get('/', (req, res) => {
    res.status(200).json({ message: "Truck Support API is running 🚛🔥" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
