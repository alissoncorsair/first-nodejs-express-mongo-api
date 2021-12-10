const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

//'posts' is the name of the table if im not mistaken
module.exports = mongoose.model('Posts', PostSchema)