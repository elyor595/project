const { read_file, write_file } = require("../fs/fileSysteam");
const {v4} = require("uuid")

const getAllcars = async (req, res) => {
    try{
        const fileData = read_file("cars.json")

        res.status(200).json(fileData)

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getOneCar = async (req, res) => {
    try{
        const {id} = req.params
        const fileData = read_file("cars.json")

        const foundedcar = fileData.find((item) => item.id === id)

        if (!foundedcar) {
            res.status(404).json({message: "Car not found"})
        }

        res.status(200).json(foundedcar)

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

const addCar = async (req, res) => {
    try{
        const {title, price} = req.body
        const fileData = read_file("cars.json")

        fileData.push({
            id: v4(),
            title,
            price
        })

        write_file("cars.json", fileData)
        res.status(201).json({message: "Added new car"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

const updateCar = async (req, res) => {
    try{
        const {title, price} = req.body
        const {id} = req.params
        const fileData = read_file("cars.json")

        const foundedcar = fileData.find((item) => item.id === id)

        if (!foundedcar) {
            res.status(404).json({message: "Car not found"})
        }

        fileData.forEach((item) => {
            if (item.id === id) {
                item.title = title ? title : item.title
                item.price = price ? price : item.price
            }
        })

        write_file("cars.json", fileData)
        res.status(201).json({message: "Updated car"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

const deleteCar = async (req, res) => {
    try{
        const {id} = req.params
        const fileData = read_file("cars.json")

        const foundedcar = fileData.find((item) => item.id === id)

        if (!foundedcar) {
            res.status(404).json({message: "Car not found"})
        }

        fileData.forEach((item, idx) => {
            if (item.id === id) {
              fileData.splice(idx,1)
            }
        })

        write_file("cars.json", fileData)
        res.status(201).json({message: "Deleted car"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAllcars,
    getOneCar,
    addCar,
    updateCar,
    deleteCar
}