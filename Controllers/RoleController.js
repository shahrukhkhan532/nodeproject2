const Role = require("../Models/Role")

const getAllRoles = async (req, res, next) => {
    let roles = undefined;
    try {
        roles = await Role.find({});
    } catch (error) {
        return next(error);
    }
    if (roles == null) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ roles });
}
const getRoleById = async (req, res, next) => {
    let id = req.params.id;
    let role = await Role.findById(id);
    if (!role) {
        return res.status(400).json({ message: "Unable to find role" });
    }
    return res.status(200).json(role);
}
const addRole = async (req, res, next) => {
    const { name } = req.body;
    let role = undefined;
    try {
        role = new Role({
            name
        });
        role = await Role.insertMany([role]);
    } catch (e) {
        console.log(`${e}`.red);
        return next(e);
    }
    return res.status(201).json({ role });
}
const updateRole = async (req, res, next) => {
    const id = req.params.id;
    const { name } = req.body;

    let role = undefined;
    try {
        role = await Role.findByIdAndUpdate(id, { name });
    } catch (e) {
        console.log(`${e}`.red);
        return next(e);
    }

    if (role == null) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Role Updated successfully." });
}
const deleteRole = async (req, res, next) => {
    const id = req.params.id;
    let role = undefined;
    try {
        role = await Role.findByIdAndRemove(id);
    } catch (e) {
        console.log(`${e}`.red);
        return next(e);
    }
    if (role == null) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Role Deleted successfully." });
}


module.exports = { getAllRoles , getRoleById, addRole, updateRole, deleteRole };