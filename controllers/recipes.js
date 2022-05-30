//required dependencies 
const express = require('express');
const res = require('express/lib/response');
const Recipe = require('../models/recipe.js')
const router = express.Router()

//Routes
//Index/Homepage
router.get('/', (req, res) => {
    Recipe.find({}, (err, foundRecipes)=> {
        res.render('index.ejs', {recipes: 
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
router.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, () => {
      
        res.redirect('/recipes')
    })
})

//Create
router.post('/', (req, res) => {
    Recipe.create(req.body, (err, createdRecipe) => {
        res.redirect('/recipes')
    });
});

//Edit
router.get('/:id/edit', (req, res) => {
    Recipe.findById(req.params.id, (err, foundRecipes) => {
        
        res.render('recipes/edit.ejs', {recipes: foundRecipes, 
        
        })
        
        
    })
})


//Show/view recipe
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id, (err, foundRecipes) => {
       
        res.render('recipes/show.ejs', {recipes: foundRecipes
        })
    })
})

module.exports = router;