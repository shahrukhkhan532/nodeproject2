const Order = require("../Models/Order");
const User = require("../Models/User");

const getOrders = async (req, res, next) => {
    try {
        let orders = await Order.find().populate('userId', 'username phonenumber');
        return res.json(orders);
    } catch (e) {
        return res.status(500).json(e.message);
    }
}

const saveOrders = async (req, res, next) => {
    try {
        const { total, userId } = req.body;
        console.log(req.body);
        let orders = await Order.insertMany([{ total, userId }]);
        return res.json({ orders });
    } catch (e) {
        console.log(e.message);
        return next(e);
    }
}

module.exports = { getOrders, saveOrders }