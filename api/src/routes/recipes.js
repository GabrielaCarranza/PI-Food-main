const { Router } = require('express');
const axios = require('axios');
const { getApiById, getAllRecipes, getDbById } = require('../controllers/recipes');
const { Recipe, Diet } = require('../db')

/* const { API_KEY, API_KEY1 } = process.env;
const API_KEY1 = '31f42348fa114d0088d8b9a89c5ece5c';*/

const router = Router();

router.get('/', async(req, res, next) => {
    try {

        let allRecipes = await getAllRecipes()

        let recipes = allRecipes.map(e => {
            return {
                image: e.image,
                name: e.name,
                dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                score: e.score,
                id: e.id
            }
        })
        return res.status(200).send(recipes);

    } catch {
        return res.status(400).send('Invalid input en routes/index/getAllRecipes');
    }
});
module.exports = router;