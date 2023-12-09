const express = require('express')
const app = express()
const userRouter = require('../routes/user.routes')
const postRouter = require('../routes/post.router')
const categoryRouter = require('../routes/category.routes')
const auth = require('./auth')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user', userRouter)
app.use('/post', auth, postRouter)
app.use('/category', categoryRouter)


module.exports = app
