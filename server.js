//required dependencies 
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const recipesController = require('./controllers/recipes.js')
require('dotenv').config()
const app = express()
const port = 3000; 


//database
mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
})


//Database connection error/success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + 'is mongod not running'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//middleware 
app.use(methodOverride ('_method'));
app.use(express.urlencoded({extended: true }));
app.use('/recipes', recipesController);
app.use(express.static('public'));




//listener
app.listen(port, () => {
    console.log('hello on port', port)
})
