const Restaurant = require("../models/restaurantModel");

exports.addRestaurant = async (req,res)=>{

    const {name, address, neighborhood} = req.body;
    const photograph = req.file.path
    
    try {
        const restaurant =  await Restaurant.create({
            name,
            address,
            neighborhood,
            photograph
        })

        // const restaurants = await Restaurant.find();
    
        if(!restaurant){
            return res.status(500).json({
                success:false,
                message:"Restaurant registration failed!"
            });
        }
    
        res.status(201).json({
            success:true,
            message:"Restaurant registration successfully completed",
            restaurant,
            // restaurants
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
    
}

exports.getRestaurants = async (req,res)=>{

    try {
        const restaurants = await Restaurant.find();
    
    if (!restaurants){
        res.status(500).json({
            success:false,
            message:"Restaurants not found!",
        });
    }

    res.status(200).json({
        success:true,
        restaurants
    });

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }

}

exports.deleteRestaurant = async (req,res) => {

    const {id} = req.params;

    try {
        
        const restaurant = await Restaurant.findByIdAndDelete(id);
        // const restaurants = await Restaurant.find();

        if(!restaurant){
            return res.status(404).json({
                success:false,
                message:"Restaurant Not Found!",
            });
        }

        res.status(200).json({
            success:true,
            message:"Restaurant deleted successfully!",
            restaurant
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }

}


