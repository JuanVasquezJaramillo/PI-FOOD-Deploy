const {API_KEY5} = process.env;
const probando = require('../los100') //Nos traemos el array que contiene todas las recetas

module.exports = async (req, res) => {
    try {
        //DESCOMENTAR CUANDO FUNCIONE
    //const {data} = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY5}&addRecipeInformation=true&number=100`));
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
                return res.status(200).json(recipes);
            //} Descomentar esto cuando la API esté funcionando
    } catch (error) {
        return res.status(500).send(error.message)
    }
}