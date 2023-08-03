const axios = require('axios');
const {Recipe} = require('../db')
const {API_KEY} = process.env;

const URL = "https://spoonacular.com/recipes/"
module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        if(id === undefined || id === null || !id) return res.status(404).send("No se ingresó un ID valido")
        const receta = await Recipe.findByPk(id);
        if(receta) return res.status(201).json(receta);
        if(!receta){
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
            if(data){
                let recipe = {
                Id: data.id,
                Nombre: data.title,
                Imagen: data.image,
                Resumen: data.summary.replace("", ""), //Estos valores los tomé analizando el obj JSON que retorna una request al encontrar la receta
                Health_Score: data.healthScore,
                PasoAPaso: data.instructions,
                Diets: data.diets.join(', ')
                }
                return res.status(200).json(recipe);
            }
        }
    }
    catch (error) {
        res.status(500).send(error.message);
        //'Algo no salió como se esperaba ¯\_(ツ)_/¯'
    }
}