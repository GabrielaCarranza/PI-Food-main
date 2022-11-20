const { Router } = require('express');
const { Recipe, Diet } = require('../db')



const router = Router();

//ALTA NUEVA RECETA/ RECIPE
router.post('/', async(req, res, next) => {
    try {
        //req por body viajan los datos por json
        const { name, summary, score, steps, dietTypes } = req.body
        const newRecipe = await Recipe.create({
            name,
            summary,
            score,
            steps
        })

        let dietTypesRecipeDb = await Diet.findAll({
            where: { name: dietTypes }
        })
        newRecipe.addDiet(dietTypesRecipeDb)
        res.status(200).send(newRecipe)
    } catch (error) {
        next(error)
    };
});



module.exports = router;