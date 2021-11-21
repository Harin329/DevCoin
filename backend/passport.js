const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GitHubStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.REDIRECT_URI
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
  
  