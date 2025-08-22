const { Router } = require("express");
const { getAllAnimals, addAnimal, updateAnimal, deleteAnimal, getOneAnimal } = require("../controller/animals.ctr");

const animalRouter = Router()

animalRouter.get("/get_all_animals", getAllAnimals)
animalRouter.post("/add_animal/", addAnimal)
animalRouter.get("/get_one_animal/:id", getOneAnimal)
animalRouter.put("/update_animal/:id", updateAnimal)
animalRouter.delete("/delete_animal/:id", deleteAnimal)


module.exports = animalRouter