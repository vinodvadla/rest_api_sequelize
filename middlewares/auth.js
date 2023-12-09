const jwt = require('jsonwebtoken')
const { User } = require('../models')

const auth = async (req, res, next) => {
    try {
        let { authorization } = req.headers
        if (!authorization) {
            return res.status(401).json("Unotherized")
        }
        let token = authorization.split(" ")[1]
        let { id } = await jwt.verify(token, "vinodvadla7144")
        let user = await User.findByPk(id)
        if (!user) return res.status(401).json("Unauthorized")
        req.user = id
        next()
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports=auth
