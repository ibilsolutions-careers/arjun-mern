const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    book:{
        title: {
            type: String,
            require: true  
        },
        author:{
            type: String,
            require: true
        },
        publishedYear:{
            type: Number,
            require: true
        }

    }


})
module.exports = mongoose.model('Book', bookSchema)