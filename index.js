const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const mongoose = require('mongoose');
const RoleRouter = require('./Routes/RoleRouters');
const UserRouter = require('./Routes/UserRouter');
const OrderRouter = require('./Routes/OrderRouter');
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use("/roles", RoleRouter);
app.use("/users", UserRouter);
app.use("/orders", OrderRouter);
const PORT = 5000;

mongoose.connect("mongodb+srv://srk:File348132@spotify.8mswx.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected & App started on ${PORT} at ${new Date()}`.bgCyan);
        });
    })
    .catch(error => {
        console.log(`${error}`.red);
        process.exit(1);
    });

