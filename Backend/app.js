const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const bookRoutes = require('./routes/book')




const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(()=> console.log('connected to mongodb')).catch(e => console.log(e)
)

app.use('/api', bookRoutes)

const port = process.env.PORT || 5000

app.listen(5000, ()=> console.log('app running on port 5000')
)

