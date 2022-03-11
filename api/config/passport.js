const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy((username, password, done) => {
            User.findOne({
                username: username
        }).then(user => {
            if (!user) {
            return done(null, false, { message: 'That username is not registered' });
        }
        if(password !== user.password)  {
            return done(null, false, { message: 'Password incorrect' })
        } else {
            return done(null, user);
        }
        });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};