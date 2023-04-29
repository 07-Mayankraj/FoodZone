const express = require('express');
const { RestaurantModel } = require('../models/restaurant.model');

const restaurantRouter = express.Router()

// get all restaurant
restaurantRouter.get("/", async (req, res) => {

    try {
        let data = await RestaurantModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("error getting all restaurant")
    }
    
})

// get specipic restaurant

restaurantRouter.get("/:id", async (req, res) => {
    let id  = req.params.id
    try {
        let data = await RestaurantModel.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("error getting all restaurant")
    }
    
})

// created restaurant
restaurantRouter.post("/addrest", async (req, res) => {
    
    try {
        
        let data = new RestaurantModel(req.body)
        await data.save()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("error getting all restaurant")
    }
    
})

// adding new itme in menu

restaurantRouter.post("/:id/menu", async (req, res) => {
    let id = req.params.id;
    console.log(id);
    try {
        
        let data = await RestaurantModel.findById(id)
        data.menu.push(req.body)
        await data.save()
        res.status(201).send("item added in restaurant" + data.name)
    } catch (error) {
        res.status(400).send("error adding new itmes restaurant")
    }
    
})
restaurantRouter.delete("/:id/menu/:did", async (req, res) => {
    let restaurantId = req.params.id;
    let dishesId = req.params.did
    try {
        
        let data = await RestaurantModel.findById(restaurantId)
        let menu = data.menu;
        let newmenu = menu.filter((ele) =>  ele._id !== `new ObjectId("${dishesId}")`)
        console.log(newmenu);
        data.menu = newmenu;
        await data.save()
        res.status(201).send("item deleted in restaurant" + data.name)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
    

    console.log(restaurantId,dishesId);
   
    
})


module.exports = { restaurantRouter }



// http://localhost:8080/restaurants/644cd2f8ad0195c03dd06a19 res
// http://localhost:8080/restaurants/644cd2f8ad0195c03dd06a19/menu newitme in menu post
// http://localhost:8080/restaurants/644cd2f8ad0195c03dd06a19/menu/644cd5008c36c91b0f023f2d dleete itme in menu delete
