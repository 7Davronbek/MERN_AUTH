const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api', router)

mongoose.connect(`mongodb+srv://mern_auth:${process.env.MONGO_PASSWORD}@cluster0.gn7dyr9.mongodb.net/mern_auth?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000)
        console.log('Database is connected');
    })
    .catch((err) => {
        console.log(err);
    })
