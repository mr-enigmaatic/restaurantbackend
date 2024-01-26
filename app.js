const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors({
    credentials:true,
    origin:true,
}));

app.use(__dirname + '/uploads', express.static(__dirname + "uploads"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Routes
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');

app.use('/api/v1', userRoutes);
app.use('/api/v1', restaurantRoutes);



// error middleware
app.use((err,req,res,next)=>{                    
    console.log(err.message);
})




module.exports = app;