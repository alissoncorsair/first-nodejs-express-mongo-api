const express = require('express')
const router = express.Router()
const Post = require('../models/Post.js')

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

//SUBMITS A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        // res.json(savedPost)
        // location.reload()
    } catch (err) {
        res.json({ message: err })
    }
})

//SPECIFIC POST
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.json({message: err})
    }
})

//DELETE POST
router.delete('/:id', async (req, res) => {
    try {
       const removedPost = await Post.findByIdAndRemove(req.params.id)
        res.json(removedPost)
    } catch (err) {
        res.json({message: err})
    }
})

//PATCH POST
router.patch('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedPost)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router