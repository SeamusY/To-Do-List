import * as  GoogleStrategy from 'passport-google-oauth2';
import * as env from 'dotenv';
env.config();

export default (passport) => {
  passport.use(new GoogleStrategy.Strategy({
    // options for google strategy
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  }, (request, accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
  ));
  passport.serializeUser((id, done) => {
    done(null, id);
  });
  passport.deserializeUser((id, done) => {
    // User.findById(id).then((user) => {
    done(null, id);
    // });
  });
}