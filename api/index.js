const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const session = require('express-session');
const cors = require('cors');
const connectDB = require('./config/db');

require('./config/passport')(passport);

const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');


dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true, 
    secret: process.env.SESSION_SECRET
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);

connectDB();

const PORT = process.env.PORT;

app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`)
);


