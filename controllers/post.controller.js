const { Post, User, Category } = require('../models')


const addPost = async (req, res) => {
    try {
        let { title, content, image, categoryId } = req.body
        let UserId = req.user
        if (!title || !content || !image) return res.status(404).json("Please fill all fields")
        let post = await Post.create({ title, content, image, UserId, categoryId })
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const allPosts = async (req, res) => {
    try {
        let posts = await Post.findAll({
            include: [Category,User]
        })
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getPostsUser = async (req, res) => {
    try {
        let id = req.params.id
        let posts = await User.findByPk(id, {
            include: [Post]
        })
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error.message)
    }
}



module.exports = { addPost, getPostsUser, allPosts }
