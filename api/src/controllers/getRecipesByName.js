const axios = require('axios');
const { Recipe } = require('../db')
const { API_KEY } = process.env;
const { API_KEY2 } = process.env;
const { API_KEY3 } = process.env;
const { API_KEY5 } = process.env;


module.exports = async (req, res) => {
    try {
        let {name} = req.query;
        if(name){
            let recetasBD = await Recipe.findAll()
            let receta = recetasBD.filter((receta)=> receta.Nombre.toLowerCase().includes(name.toLowerCase()));
            if(receta.length ===0 || !receta){  
                const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results
                let recetaP = response.filter((recipe) => recipe.title.toLowerCase().includes(name.toLowerCase()));
                recetaP.length ? res.status(200).json(recetaP) : res.status(404).send('NOT FOUND')
            }else{
                res.status(202).json(receta);
            }
        }else{
            res.status(404).send('No se encontró un nombre por medio de query')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}