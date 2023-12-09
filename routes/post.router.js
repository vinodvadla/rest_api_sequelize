const express = require('express')
const router = express.Router()
const { addPost, getPostsUser, allPosts } = require('../controllers/post.controller')


router.post('/', addPost)
router.get('/:id', getPostsUser)
router.get('/', allPosts)

module.exports = router
