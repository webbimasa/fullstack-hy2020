const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String
    },
    url: {
        type: String,
        unique: true
    },
    likes: {
        type: Number
    }
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
blogSchema.plugin(uniqueValidator)

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog