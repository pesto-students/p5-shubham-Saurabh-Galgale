const users = require('../models/users');

let getUsers = async (req, res, next) => {
    let allUsers;
    try {
        allUsers = await users.find();
    } catch (error) {
        console.log(error)
    }
    if(!allUsers) {
        res.status(404).json({
            message: "No users found"
        });
    }
    res.status(200).json(allUsers);
    next();
}

let signup = async (req, res, next) => {
    let {name, email, password} = req.body;
    let existingUser;
    try {
        existingUser = await users.find({email})
    } catch (error) {
        console.log(error);
    }
    if(existingUser) {
        res.status(400).json({
            message: "user already exist (go to Log in page)"
        });
    }

    let person = new users({
        name,
        email,
        password
    });
    try {
        person.save();
    } catch (error) {
        console.log(error)
    }
    res.status(201).json({
        message: "sign up successful"
    });
    next();
}

module.exports = { getUsers, signup };