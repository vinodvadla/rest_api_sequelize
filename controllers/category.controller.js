const { Category, Post } = require('../models')


let addCategory = async (req, res) => {
    try {
        let { name } = req.body
        let category = await Category.create({ name })
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getAllcategorys = async (req, res) => {
    try {
        let categorys = await Category.findAll({
            include: [Post]
        })
        res.status(200).json(categorys)
    } catch (error) {
        res.status(500).json(error.message)
    }
}





module.exports = { addCategory, getAllcategorys }
