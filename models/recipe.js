const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    img: {
        type: string,
    },
    ingredients:{
      type: string,
      required: true,
    }, 
    directions: { 
        type: string,
        required: true,
        
    },

    
})

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;