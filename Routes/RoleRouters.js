const express = require('express');
const { getAllRoles, addRole, updateRole, deleteRole, getRoleById } = require('../Controllers/RoleController');

const RoleRouter = express.Router();

RoleRouter.get("/", getAllRoles);
RoleRouter.get("/:id", getRoleById);
RoleRouter.post("/", addRole);
RoleRouter.put("/:id", updateRole);
RoleRouter.delete("/:id", deleteRole);

module.exports = RoleRouter