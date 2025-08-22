const { read_file, write_file } = require("../fs/fileSysteam");
const {v4} = require("uuid")

const getAllAnimals = async (req, res) => {
    try{
        const fileData = read_file("animals.json")

        res.status(200).json(fileData)

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getOneAnimal = async (req, res) => {
    try{
        const {id} = req.params
        const fileData = read_file("animals.json")

        const foundedanimal = fileData.find((item) => item.id === id)

        if (!foundedanimal) {
            res.status(404).json({message: "Animal not found"})
        }

        res.status(200).json(foundedanimal)

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}


const addAnimal = async (req, res) => {
    try{
        const {title} = req.body
        const fileData = read_file("animals.json")

        fileData.push({
            id: v4(),
            title
        })

        write_file("animals.json", fileData)
        res.status(201).json({message: "Added new animal"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}


const updateAnimal = async (req, res) => {
    try{
        const {title} = req.body
        const {id} = req.params
        const fileData = read_file("animals.json")

        const foundedanimal = fileData.find((item) => item.id === id)

        if (!foundedanimal) {
            res.status(404).json({message: "Animal not found"})
        }

        fileData.forEach((item) => {
            if (item.id === id) {
                item.title = title ? title : item.title
            }
        })

        write_file("animals.json", fileData)
        res.status(201).json({message: "Updated animal"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}


const deleteAnimal = async (req, res) => {
    try{
        const {id} = req.params
        const fileData = read_file("animals.json")

        const foundedanimal = fileData.find((item) => item.id === id)

        if (!foundedanimal) {
            res.status(404).json({message: "Animal not found"})
        }

        fileData.forEach((item, idx) => {
            if (item.id === id) {
              fileData.splice(idx,1)
            }
        })

        write_file("animals.json", fileData)
        res.status(201).json({message: "Deleted animal"})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAllAnimals,
    getOneAnimal,
    addAnimal,
    updateAnimal,
    deleteAnimal
}