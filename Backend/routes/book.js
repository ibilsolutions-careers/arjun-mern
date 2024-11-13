const router = require('express').Router()
const {addBook,getBook,updateBook,deleteBook} = require('../controllers')

router.post('/books', addBook)
router.get('/books:id', getBook)
router.put('/books:id', updateBook)
router.delrtr('/books:id',deleteBook)

module.exports = router