//required dependencies 
const express = require('express')
const Recipe = require('../models/recipe.js')
const router = express.Router()

//Routes
//Index/Homepage
router.get('/', (req, res) => {
    Recipe.find({}, (err, foundRecipes)=> {
        res.render('recipes/index.ejs', {recipes: 
        foundRecipes,
        });
    });
});

//New/add new recipe
router.get('/new', (req, res) => {
   res.render('recipes/new.ejs')
})

//Delete

//Update

//Create
router.post('/', (req, res) => {
    Recipe.create(req.body, (err, createdRecipe) => {
        res.redirect('/recipes')
    });
});
//Edit

//Show/view recipe
// router.get('/:id', (req, res) => {
    
// })

module.exports = router;