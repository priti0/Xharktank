const express = require('express');
const mongoose = require('mongoose');
const pitchRoutes = require('./routes/pitches');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;
const PORT = process.env.SELF_PORT || 8081;

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('database connected')
})

const app = express();
app.use(express.json());
app.use('/pitches', pitchRoutes);
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

