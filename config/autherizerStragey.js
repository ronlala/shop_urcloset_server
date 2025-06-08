const passport = require("passport");
const Bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;
const googleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/userModel");


passport.use(
    new localStrategy(async(username,Password,done) =>{

    try{
        const user = await User.findOne({username});

    if  (!user) {
        return done(null, false, {
            message: "Wrong username or password",
        });
    }
        if (!result){
        }
    const result = await Bcrypt.compare(Password, user.password);

    if (!result) {
        return done(null,false,{
            message: "Incorrect username or password.",
        });
    }
    return done(null, user);
} catch (error) {
    return done(error);
}
    }))

// Google authentication strategy 

passport.use(
    new googleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callBackURL: "http://localhost:3000/auth/google/callback",
        },
    async (accessToken, refreshToken, Profiler, done) => {
        try{
            const user = await User.findOne({googleId: Profiler.id});

        if(user) {
            return done(null, user);
        } else{
            const newUser = new User({
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                username: profile.emails[0].value,
                googleId: profile.id,
            });
        }
        await newUser.save();
        return done(null, newUser);
    } catch (error){
        return done(error, false);
    }
    }
    )
);
    

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async(id,done) => {
try {
    const user = await User.findById(id);
    done(null,user);
} catch(error){
    done(error);
}
});