const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


/* REQUERIMIENTO PI-> ## Base de datos
El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterisco deben ser obligatorias):

[ ] Receta con las siguientes propiedades:
  - ID: *
  - Nombre *
  - Resumen del plato * ->summary
  - Nivel de "comida saludable" (health score) ->healthScore
  - Paso a paso ->steps: */

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('recipe', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER
        },
        steps: {
            type: DataTypes.STRING
        },
    });
};