const express = require("express");
const { addRestaurant, getRestaurants, deleteRestaurant } = require("../controllers/restaurantControllers");
const { verifyToken } = require("../middlewares/auth");
const upload = require("../middlewares/fileUpload");
const router = express.Router();

router.route('/restaurant').post(verifyToken, upload.single('photograph'), addRestaurant);
router.route('/restaurants').get(getRestaurants);  
router.route('/restaurant/:id').delete(deleteRestaurant);


module.exports = router;