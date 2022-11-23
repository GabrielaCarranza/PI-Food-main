const { Router } = require('express');
const axios = require('axios');
const { getApiById, getAllRecipes, getDbById } = require('../controllers/recipes');
const { Recipe, Diet } = require('../db')

/* const { API_KEY, API_KEY1 } = process.env;
const API_KEY1 = '1208f458ff6a448a98f17dc6056c946d';*/

const router = Router();

// ok anda ok trae a todas recipes
router.get('/', async(req, res, next) => {
    try {
        const { name } = req.query;
        let allRecipes = await getAllRecipes()

        if (name) {
            let recipeByName = await allRecipes.filter(e => e.name.toLowerCase().includes(name.toString().toLowerCase()));

            if (recipeByName.length) {
                let recipes = recipeByName.map(e => {
                    return {
                        id: e.id,
                        image: e.image,
                        name: e.name,
                        dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                        score: e.score,
                        steps: e.steps
                    }
                })
                return res.status(200).send(recipes);
            }
            return res.status(404).send('Sorry, recipe not found')
        } else {
            let recipes = allRecipes.map(e => {
                return {
                    id: e.id,
                    image: e.image,
                    name: e.name,
                    dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                    score: e.score,
                    steps: e.steps
                }
            })
            return res.status(200).send(recipes);
        }
    } catch {
        return res.status(400).send('invalid input');
    }
});


router.get('/:id', async(req, res, next) => {
    const { id } = req.params
    try {
        //testing
        if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
            let dbRecipesById = await getDbById(id);
            return res.status(200).json(dbRecipesById)
        } else {
            apiRecipesById = await getApiById(id)
            if (apiRecipesById.data.id) {
                let recipeDetails = {
                    image: apiRecipesById.data.image,
                    name: apiRecipesById.data.title,
                    dishTypes: apiRecipesById.data.dishTypes,
                    dietTypes: apiRecipesById.data.diets,
                    summary: apiRecipesById.data.summary,
                    score: apiRecipesById.data.healthScore,
                    steps: apiRecipesById.data.analyzedInstructions[0].steps.map(e => {
                        return {
                            number: e.number,
                            step: e.step
                        }
                    })
                }
                return res.status(200).send(recipeDetails);
            }
        }
    } catch {
        return res.status(404).send('Recipe not found')
    }
});

module.exports = router;

/* [ ] __GET /recipes?name="..."__:
  - Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
  - Si no existe ninguna receta mostrar un mensaje adecuado

- [ ] __GET /recipes/{idReceta}__:
  - Obtener el detalle de una receta en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de receta
  - Incluir los tipos de dieta asociados

- [ ] __POST /recipes__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
  - Crea una receta en la base de datos relacionada con sus tipos de dietas.
  
- [ ] __GET /diets__:
  - Obtener todos los tipos de dieta posibles
  - En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular [acá](https://spoonacular.com/food-api/docs#Diets) */