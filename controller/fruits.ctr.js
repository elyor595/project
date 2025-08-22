const { read_file, write_file } = require("../fs/fileSysteam");
const {v4} = require("uuid")


const getAllFruits = async (req, res) => {
    try{
        const fileData = read_file("fruits.json")

        res.status(200).json(fileData)

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}


const getOneFruit = async (req, res) => {
    try{
        const {id} = req.params
        const fileData = read_file("fruits.json")

        const foundedfruit = fileData.find((item) => item.id === id)

        if (!foundedfruit) {
            res.status(404).json({message: "Fruit not found"})
        }

        res.status(200).json(foundedfruit)

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

const addFruit = async (req, res) => {
    try{
        const {title, price} = req.body
        const fileData = read_file("fruits.json")

        fileData.push({
            id: v4(),
            title,
            price
        })

        write_file("fruits.json", fileData)
        res.status(201).json({message: "Added new fruit"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

const updateFruit = async (req, res) => {
    try{
        const {title, price} = req.body
        const {id} = req.params
        const fileData = read_file("fruits.json")

        const foundedfruit = fileData.find((item) => item.id === id)

        if (!foundedfruit) {
            res.status(404).json({message: "Fruit not found"})
        }

        fileData.forEach((item) => {
            if (item.id === id) {
                item.title = title ? title : item.title
                item.price = price ? price : item.price
            }
        })

        write_file("fruits.json", fileData)
        res.status(201).json({message: "Updated fruit"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}


const deleteFruit = async (req, res) => {
    try{
        const {id} = req.params
        const fileData = read_file("fruits.json")

        const foundedfruit = fileData.find((item) => item.id === id)

        if (!foundedfruit) {
            res.status(404).json({message: "Fruit not found"})
        }

        fileData.forEach((item, idx) => {
            if (item.id === id) {
              fileData.splice(idx,1)
            }
        })

        write_file("fruits.json", fileData)
        res.status(201).json({message: "Deleted fruit"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAllFruits,
    getOneFruit,
    addFruit,
    updateFruit,
    deleteFruit
}