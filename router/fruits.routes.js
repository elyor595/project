const { Router } = require("express");
const { getAllFruits, addFruit, getOneFruit, updateFruit, deleteFruit } = require("../controller/fruits.ctr");

const fruitRouter = Router()

fruitRouter.get("/get_all_fruits", getAllFruits)
fruitRouter.post("/add_fruit/", addFruit)
fruitRouter.get("/get_one_fruit/:id", getOneFruit)
fruitRouter.put("/update_fruit/:id", updateFruit)
fruitRouter.delete("/delete_fruit/:id", deleteFruit)


module.exports = fruitRouter