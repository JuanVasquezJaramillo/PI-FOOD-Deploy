const {API_KEY2} = process.env;
const {API_KEY} = process.env;
const {API_KEY3} = process.env;
const {API_KEY4} = process.env;
const {API_KEY5} = process.env;
const {Recipe} = require('../db')
const probando = require('../los100') //Nos traemos el array que contiene todas las recetas

const getRecipesAPI = async (req, res) => {
    try {
        //DESCOMENTAR CUANDO FUNCIONE
            //const {data} = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`));
            //if(data){ // Descomentar cuando API FUNCIONE
                const recipes = probando.map((recipe)=>{ //original const recipes = data.results.map...
                    return{
                            Id: recipe.id,
                            Nombre: recipe.title,
                            Imagen: recipe.image,
                            Resumen: recipe.summary.replace(/<[^>]*>?/g,""), //Estos valores los tomé analizando el obj JSON que retorna una request al encontrar la receta
                            Health_Score: recipe.healthScore,
                            PasoAPaso: recipe.analyzedInstructions[0]?.steps.map((step)=> {return{step: step.step , number: step.number}}),
                            Diets: recipe.diets?.join(', ') 
                    }
                })
                return recipes;
            //} //Descomentar esto cuando la API esté funcionando
    } catch (error) {
        return error.message
    }
}

const getRecipesBDLocal = async () => {
    try {
        const recipesBD = await Recipe.findAll();
        if (!recipesBD) throw new Error("No hay recetas registradas en la base de datos");
        return recipesBD;
      } catch (error) {
        return error.message;
      }
}
module.exports = async (req, res) =>{
    try {
        const recipesAPI = await getRecipesAPI();
        const recipesBD = await getRecipesBDLocal();
        const allRecipes = [...recipesAPI, ...recipesBD]
        return res.status(200).json(allRecipes)
    } catch (error) {
        return res.status(500).send(error.message)
    }
} 