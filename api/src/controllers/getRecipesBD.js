const {Recipe, Dietas} = require('../db')

module.exports = async (req, res) => {
    try {
        const recipesBD = await Recipe.findAll();
        if (!recipesBD) throw new Error("No hay recetas registradas en la base de datos");
        return res.status(200).json(recipesBD);
      } catch (error) {
        return res.status(500).send(error.message);
      }
}
