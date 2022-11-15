const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");
/* const { API_KEY, API_KEY1 } = process.env; */
const API_KEY1 = 'apiKey=31f42348fa114d0088d8b9a89c5ece5c';

// Controller functions: 
const getApiInfo = async() => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=31f42348fa114d0088d8b9a89c5ece5c&addRecipeInformation=true&number=100`);

    const apiInfo = await apiUrl.data.results.map(e => {
        return {
            id: e.id,
            image: e.image,
            name: e.title,
            dietTypes: e.diets,
            summary: e.summary,
            score: e.spoonacularScore,
            healthScore: e.healthScore,
            dishTypes: e.dishTypes,

        }
    })

    return apiInfo;
};

const getDbInfo = async() => {
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
}

const getApiById = async(id) => {
    return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=31f42348fa114d0088d8b9a89c5ece5c`)
}


const getDbById = async(id) => {
    return await Recipe.findByPk(id, {
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
}

const getAllRecipes = async() => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const totalInfo = apiInfo.concat(dbInfo);

    return totalInfo;
}


module.exports = {
    getApiInfo,
    getDbInfo,
    getAllRecipes,
    getDbById,
    getApiById
}