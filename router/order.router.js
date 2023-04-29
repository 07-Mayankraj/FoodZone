const express = require('express');
bcrypt = require('bcrypt');
const { OrderModel } = require('../models/order.model');

const orderRouter = express.Router()


orderRouter.post("/", async (req, res) => {

    try {
        let data = new OrderModel(req.body)
        await data.save()
        res.status(200).send("new order created successfully")
    } catch (error) {
        res.status(400).send(error.message)
    }

})
orderRouter.get("/:id", async (req, res) => {

    try {
        let data = await OrderModel.findById(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }

})



orderRouter.patch("/:id", async (req, res) => {

    try {
        await OrderModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send("order updated") 
    } catch (error) {
        res.status(400).send(error.message)
    }

})




module.exports = { orderRouter }


// 644cdde32427d884650a824f