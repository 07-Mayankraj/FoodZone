require('dotenv').config();
const express = require('express')
const app = express();
const { dbconnection } = require('./configs/db');
const { userRouter } = require('./router/user.router');
const { auth } = require('./middleware/auth.middleware');
const { UserModel } = require('./models/user.model');
const { restaurantRouter } = require('./router/restaurant.router');
const { orderRouter } = require('./router/order.router');
const port = process.env.port || 8080;



// middlewares 
app.use(express.json())
// home route 
app.get("/", (req, res) => res.send(`<button style="font-size:3rem;padding :20px 50px"> Foodiieee </button>`))





// routes
app.use('/user',userRouter)
app.use(auth) 


app.patch("/user/reset",async (req, res) => {
    let {  password,userId } = req.body;
    console.log(password,userId);
    try {
        // check user already exists
        let user = await UserModel.find({ _id:userId });

        if (user.length === 0) {
            res.status(400).send("user not found")
        } else {

            bcrypt.hash(password, 5, async (err, hashPassword) => {
                if (err) res.send("error whhile signup password");
                else {
                    console.log('pudaetdting passworing');
                    await UserModel.findByIdAndUpdate(userId,{password:hashPassword})
                    res.send('password reset password');
                }

            })
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.use("/restaurants",restaurantRouter)

app.use("/orders", orderRouter)


app.listen(port, () => {
    try {
        dbconnection
        console.log('server listening on port ' + port,);
    } catch (error) {
        console.log(error.message);
    }
})
