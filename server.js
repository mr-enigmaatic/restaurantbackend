const app = require("./app");
const dotenv = require("dotenv");
const databaseConnection = require("./config/databaseConnection")
dotenv.config({path:"./config/config.env"});



databaseConnection();

app.listen(process.env.PORT, function(){ 
    console.log(`server is running on PORT ${process.env.PORT}`);
})