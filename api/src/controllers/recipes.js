const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");
/* const { API_KEY, API_KEY1 } = process.env; */
const API_KEY1 = 'apiKey=1208f458ff6a448a98f17dc6056c946d';


//  LOGICA 

// Controller functions: 
const getApiInfo = async() => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1208f458ff6a448a98f17dc6056c946d&addRecipeInformation=true&number=100`);

    const apiInfo = await apiUrl.data.results.map(e => {
        return {
            id: e.id,
            image: e.image,
            name: e.title,
            summary: e.summary,
            score: e.healthScore,
            dietTypes: e.diets,
            steps: e.analyzedInstructions
        }
    });
    console.log(apiInfo);
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
};

const getAllRecipes = async() => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const totalInfo = apiInfo.concat(dbInfo);

    return totalInfo;
};

const getApiById = async(id) => {
    return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=1208f458ff6a448a98f17dc6056c946d`)
};

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
};


module.exports = {
    getApiInfo,
    getDbInfo,
    getAllRecipes,
    getDbById,
    getApiById
}