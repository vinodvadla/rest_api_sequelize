const { User } = require('../models')
const bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')


const signup = async (req, res) => {
    try {
        let { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(404).json("please fill all the values")
        }

        let hash = await bcrypt.hash(password, 10)
        let user = await User.create({ name, email, password: hash })

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error.message)
    }
}


const login = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await User.findOne({ where: { email: email } })
        if (!user) return res.status(404).json('Invalid email or password')
        let compare = await bcrypt.compare(password, user.password)
        if (!compare) return res.status(404).json("Invalid email or password")
        console.log(user)
        let token = await jwt.sign({ id: user.id }, "vinodvadla7144")
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = { signup, login }
