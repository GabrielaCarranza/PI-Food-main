const { Diet } = require("../db");
/* const dietTypesDb = [
    'Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Lacto ovo vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30', 'Dairy free'
]; */

/* const dietTypesDb = []; */
/* console.log(dietTypesDb); */
//
//HACER get para traer DE LA API O SEA DE AL TABLA

// Y OTRO GET PARA TRAER DE DIET

// PERO DIET CONTIENE LO DE API O SEA QUE PODRÍA SOLO TRAER DE DIET DE LA BASE DE DATOS

// ESTO SOLUCIONARÍA EL TEMA DE VER LOS NUEVOS TYPOS DE RECIPE

const getDbType = async() => {
    return await Diet.findAll()
};


module.exports = {
    getDbType
}