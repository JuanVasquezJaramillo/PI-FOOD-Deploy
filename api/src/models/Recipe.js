const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Resumen_Del_Plato:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Health_Score: {
    type: DataTypes.STRING,
    allowNull: false
    },
    Paso_A_Paso:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Diets:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {timestamps: false});
};
