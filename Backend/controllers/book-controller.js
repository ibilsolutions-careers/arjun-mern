const Book = require('../model/books')

exports.addBook(async (req,res,next)=>{
    const title = req.body.title
    const author = req.body.author
    const publishedYear = req.body.publishedYear
    const alreadyExist = Book.findOne(book => book.title === title)
    if(alreadyExist)(
        res.status(500).json({message: 'Book alreay exist'})
    )
    try{
        const newBook = new Book({title, author, publishedYear})
        await newBook.save()
        res.status(200).json({newBook})
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
exports.getAllBooks(async (req,res,next)=>{
    const bookId = req.params
    try{
        const books = Book.find()
        if(!books){
            res.status(500).json({message: 'Book does not exist'})
        }
        res.status(200).json({books})
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
exports.getBook(async (req,res,next)=>{
    const bookId = req.params
    try{
        const book = Book.findOne(book => book._id === bookId)
        if(!book){
            res.status(500).json({message: 'Book does not exist'})
        }
        res.status(200).json({book})
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
exports.updateBook(async (req,res,next)=>{
    const title = req.body.title
    const author = req.body.author
    const publishedYear = req.body.publishedYear
    const bookId = req.params
    const book = Book.findOne(book => book._id === bookId)
    if(alreadyExist)(
        res.status(500).json({message: 'Book alreay exist'})
    )
    try{
        await Book.updateOne(book => book._id == bookId)
        res.status(200).json({messafge: 'updated'})
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
exports.deleteBook(async (req,res,next)=>{
    
    const bookId = req.params
    const book = Book.findOne(book => book._id === bookId)
    if(alreadyExist)(
        res.status(500).json({message: 'Book alreay exist'})
    )
    try{
        await Book.deleteOne(book => book._id == bookId)
        res.status(200).json({messafge: 'updated'})
    }catch(e){
        res.status(500).json({message: e.message})
    }
})