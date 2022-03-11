const express = require('express');
const router = express.Router();
const passport = require('passport')

const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { firstName, lastName, username, email, password, confirmPassword } = req.body;
    const user = await User.findOne({ username: req.body.username });

    if(user) return res.status(400).json('User already exists');

    if(password !== confirmPassword) return res.status(400).json('Passwords do not match');
    
    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    });
    
    await newUser.save();
    
    res.status(201).json({ success: true, user: user });
 });

router.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) return res.status(404).json("No User Exists")
        req.logIn(user, (err) => {
            if (err) throw err;
            res.status(200).json({ success: true, user: user });
        });
    })(req, res, next);
});

router.get('/user', (req, res) => {
    res.json(req.user);
});

router.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
});

router.put('/user/:id', async (req, res) => {
    const { username } = req.body;

    const user = await User.findById(req.params.id);
    
    user.firstName = user.firstName;
    user.lastName = user.lastName;
    user.email = user.email;
    user.password = user.password;
    user.confirmPassword = user.confirmPassword;

    user.username = username;

    await user.save();

    res.status(200).json({
        success: true,
        user: user
    });
});

router.post('/logout', (req, res) => {
    req.logout();
});

module.exports = router;