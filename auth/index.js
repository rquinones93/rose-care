const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { Users } = require("../database");

passport.serializeUser((user_id, done) => {
  done(null, user_id);
});

passport.deserializeUser((user_id, done) => {
  Users.getUserById(user_id)
    .then(user => {
      done(null, user);
    })
    .catch(error => {
      done(error);
    });
});

passport.use(new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email' // username is actually the email, overriding normal mechanism
  },
  (request, username, password, done) => {
    Users.getUserByEmail(username).then(user => {
      if (!user) {
        done(null, false, {
          message: "This email address is not in use."
        });
      }
      bcrypt.compare(password, user.password).then(result => {
        if (result) {
          done(null, user.id);
        } else {
          done(null, false, {
            message: "Invalid password."
          });
        }
      });
    });
  }
));

module.exports = passport;