const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true}))


//IMPORTING ROUTES
const postsRoute = require('./routes/posts.js')
app.use('/posts', postsRoute)


//ROUTES
app.get('/', (req, res) =>{
    res.send('we are on home')
})


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log("connected to mongo"))


//listening to the server
app.listen(3000, () => console.log("running on port http://localhost:3000"))

