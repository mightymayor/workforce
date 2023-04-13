const express = require('express')
const port = process.env.PORT || 5000
const dotenv = require ('dotenv').config()
const {urlencoded} = require ('express')
const connectDB = require ('./config/database')
const {errorhandler} = require('./middlewares/errorMid')

connectDB ()
const app = express();

app.use(express.json ())
app.use(express.urlencoded({extended: false }))

app.use('/api/goals',require('./Routes/goalRoutes'))

app.use(errorhandler)
app.listen(port,()=>{console.log(`Server listening on port ${port}`)})