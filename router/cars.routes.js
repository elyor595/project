const { Router } = require("express");
const { getAllcars, getOneCar, addCar, updateCar, deleteCar } = require("../controller/cars.ctr");


const carRouter = Router()

carRouter.get("/get_all_cars", getAllcars)
carRouter.post("/add_car/", addCar)
carRouter.get("/get_one_car/:id", getOneCar)
carRouter.put("/update_car/:id", updateCar)
carRouter.delete("/delete_car/:id", deleteCar)


module.exports = carRouter