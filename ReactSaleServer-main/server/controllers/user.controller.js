const User = require('../models/user.model');

const addUser = async (req, res) => {
    try {
        let newUser = new User(req.body);
        let ansUser = await newUser.save();
        console.log("User saved successfuly!")
        res.status(200).send(ansUser);
    } catch (error) {
        console.log("Can't save this user with error: " + error);
    }
}

const getUserByName = async (req, res) => {
    let name = req.params.name;
    console.log(name)
    try {
        let ansUser = await User.findOne({ 'username': name });
        console.log("User found successfuly!")
        console.log(ansUser)
        res.status(200).send(ansUser);
    } catch (error) {
        console.log("Can't get this user with error: " + error);
    }
}  

const getAllUsers = async (req, res) => {
    try {
        let allUsers = await User.find();
        console.log("Users found successfuly!")
        res.status(200).send(allUsers);
    } catch (error) {
        console.log("Can't get users with error: " + error);
    }
}



module.exports = {
    addUser,
    getUserByName,
    getAllUsers,
};