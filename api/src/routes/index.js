const { Router } = require('express');
const getRecipesByID = require('../controllers/getRecipesByID');
const getRecipesByName = require('../controllers/getRecipesByName');
const postRecipe = require('../controllers/postRecipe');
const getDiets = require('../controllers/getDiets');
const getAllRecipes = require('../controllers/getAllRecipes');
const getRecipesBD = require('../controllers/getRecipesBD');
const getRecipesAPI = require('../controllers/getRecipesAPI');
const {conn} = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes", getAllRecipes);
router.get("/recipes/name", getRecipesByName);
router.get("/recipes/:id", getRecipesByID);
router.post("/recipes/", postRecipe);
router.get("/diets", getDiets);
router.get("/recipesBD", getRecipesBD);
// router.get('/recipesAPI', getRecipesAPI);

module.exports = router;
