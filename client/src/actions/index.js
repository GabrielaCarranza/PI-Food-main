import axios from 'axios';
import { GET_RECIPES, GET_RECIPE_DETAILS, DIET_TYPE_FILTER, ALPHABETICAL_SORT, SCORE_SORT, SEARCH_RECIPE, GET_DIET_TYPES } from './types.js';

export function getRecipes() {
    return function(dispatch) {
        //${LOCAL_HOST}
        //console.log('http://localhost:3001');

        // ACÁ RELACIONO EL FRONT CON EL BACKEND
        axios.get(`http://localhost:3001/api/recipes`)
            .then((response) => {
                return dispatch({ type: GET_RECIPES, payload: response.data })
            }).catch((error) => {
                console.log(error)
            })
    }
};

export function getRecipesByName(payload) {
    // REBIDO PARAMETRO paylaod con el nombre de la RECIPE
    return async function(dispatch) {
        try {
            // LE ENVÍO AL BACKEND EL PARÁMETRO PAYLOAD QUE CONTIENE EL NOMBRE DE LA RECETA/ RECIPE
            var response = await axios.get(`http://localhost:3001/api/recipes?name=${payload}`);
            //RETORNA LO QUE DEVUELVA LA RUTA 
            return dispatch({ type: SEARCH_RECIPE, payload: response.data })
        } catch {
            return alert('Recipe Not Found !')
        }
    }
}

export function getDietTypes() {
    return async function(dispatch) {
        try {
            var response = await axios.get(`http://localhost:3001/api/types`);
            return dispatch({ type: GET_DIET_TYPES, payload: response.data.map(d => d.name) });
        } catch (error) {
            console.log(error)
        }
    }
}

export function addRecipe(payload) {
    return async function(dispatch) {
        try {
            var response = await axios.post(`http://localhost:3001/api/recipe`, payload);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

export function addType(payload) {
    return async function(dispatch) {
        try {
            var response = await axios.post(`http://localhost:3001/api/type`, payload);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}


export function getRecipeDetails(payload) {
    return async function(dispatch) {
        try {
            var response = await axios.get(`http://localhost:3001/api/recipes/${payload}`);
            return dispatch({ type: GET_RECIPE_DETAILS, payload: response.data })
        } catch (error) {
            console.log(error)
        }
    }
};

export function dietTypeFilter(payload) {
    return {
        type: DIET_TYPE_FILTER,
        payload
    }
};

export function aplhabeticalSort(payload) {
    return {
        type: ALPHABETICAL_SORT,
        payload
    }
};

export function scoreSort(payload) {
    return {
        type: SCORE_SORT,
        payload
    }
};