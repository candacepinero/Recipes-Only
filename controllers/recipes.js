//required dependencies 
const express = require('express')
const Recipe = require('../models/recipe.js')
const router = express.Router()

//Routes
//Index/Homepage
router.get('/', (req, res) => {
    res.send('this route is working')
})

//New/add new recipe

//Delete

//Update

//Create

//Edit

//Show/view recipe


module.exports = router;