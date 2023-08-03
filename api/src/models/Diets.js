const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Dietas',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {timestamps: false})
}