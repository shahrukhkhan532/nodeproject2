const express = require('express');
const { getOrders, saveOrders } = require('../Controllers/OrderController');

const OrderRouter = express.Router();

OrderRouter.get('/', getOrders);
OrderRouter.post('/', saveOrders);


module.exports = OrderRouter