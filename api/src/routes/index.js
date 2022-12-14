const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipesRouter = require('./recipes');
const typesRouter = require('./types');
const recipeRouter = require('./recipe');
const typeRouter = require('./type')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRouter);
router.use('/types', typesRouter);
router.use('/recipe', recipeRouter);
router.use('/type', typeRouter);


module.exports = router;