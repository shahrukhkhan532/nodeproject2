const User = require("../Models/User")

const getAllUsers = async (req, res, next) => {
    let users = await User.find({});
    return res.json(users);
}

const addUser = async (req, res) => {
    const { username, email, phonenumber } = req.body;
    try {
        let users = await User.insertMany([{ username, email, phonenumber }]);
        return res.json(users);
    } catch (e) {
        return res.status(500).json(e.message);
    }
}

module.exports = { getAllUsers, addUser }