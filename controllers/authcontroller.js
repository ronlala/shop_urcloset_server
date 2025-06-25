const passport = require("passport");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

const { request, response } = require("express");


const register = async (req, res, next) => {
    const {firstName, lastName, username, password} = request.body;
    console.log(request.body);
  if (error){
    return next(error);
  } else if (!firstName || !username || !password){
    return response.status(400).json({
        error: {message: "You are missing stuff."},
        statusCode: 400,
    });
}
    
try{
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser={
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: hashedPassword,
        googleId: googleId,
     
    };
await newUser.save();

req.login(newUser, (error) =>{
  if (error){
    return next(error);
  }
  newUser.password = undefined;

  return res.status(201).json({
    success:{message: "New User is created"},
    data:{newUser},
    statusCode: 201,

});
})
} catch(error) {
    return next(error)
    };
}


const login = async(req , res, next) => {
    res.status(200).json({
        success:{message: "user"},
    });
}

const localLogin = async (req, res, next) => {

    passport.authenticate("local", (err,user,info) =>{
        if (error) {
            return next(error);
        }
        if (!user) {
            return res.status(401).json({
                error: {message: " There is not a user detected. Please try again"},
            });
        }
        req.login(user, (err) => {
            if (error) {
                return next (error)
            }
 response.status(200).json({
                success: { message: "Login successful within local authentication feature." },
                statusCode: 200,
            });
        })
  })

  
};

const logout = async(req, res,next) => {
 req.logout((error) => {
    if (error){
        return next(error);
    }
    req.session.destroy((error) => {
        if (err){
            return next(error);
        }
    })
    res.clearCookie("connect.sid");
    return res.status(200).json({
        success: {message: "User is logged out."},
        statusCode: 200,
    });
})
};     
module.exports = {register, login, logout, localLogin}; // adding commits 