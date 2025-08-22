const express = require("express")
const cors = require("cors")
require("dotenv").config()
const animalRouter = require("./router/animals.routes")
const carRouter = require("./router/cars.routes")
const fruitRouter = require("./router/fruits.routes")

const app = express()
const PORT = process.env.PORT || 4000
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Railway ")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
// router
app.use(animalRouter)
app.use(carRouter)
app.use(fruitRouter)

app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
})