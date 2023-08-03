const {Recipe, Dietas} = require('../db');

const postRecipes = async (obj) => {
    try {
      if (!obj.Nombre || !obj.Resumen_Del_Plato)
        throw new Error("No se encontró un nombre o resumen");
      const created = await Recipe.create(obj);
      return created;
    } catch (error) {
      return error;
    }
  };


module.exports = async (req, res) => {
    try {
        const {Nombre, Imagen, Resumen_Del_Plato, Health_Score, Paso_A_Paso, Diets} = req.body;
        console.log("postRecipeController", req.body);
        if(!Nombre || !Imagen || !Resumen_Del_Plato || !Health_Score || !Paso_A_Paso || !Diets) return res.status(401).send('No se han recibido los suficientes datos')
        const response = await postRecipes({
            Nombre,
            Imagen,
            Resumen_Del_Plato,
            Health_Score,
            Paso_A_Paso,
            Diets: Diets.join(', '),
        });
        let filtrarDietas = await Dietas.findAll({
          where: {Nombre: Diets},
        });
        await response.addDietas(filtrarDietas);
        res.status(202).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}