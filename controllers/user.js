const { v4 : uuidv4 } = require('uuid');
const {setUser} = require('../services/auth')
const User = require('../models/user')

const handleUserSignup = async(req,res)=>{
    const {name , email, password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
    })
    return res.redirect("/");
}
const handleUserLogin = async(req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email, password});
    if(!user) return res.render('login',console.error("Invalid Credentials"));

    // const sessionID = uuidv4(); 
    // setUser(sessionID,user);
    const token = setUser(user); // jwt
    res.cookie('uid',token);
    return res.redirect("/");
}
module.exports = {
handleUserSignup,
handleUserLogin
}