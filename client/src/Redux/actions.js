import axios from "axios";

//METODOS GET 
export const getRecipes = () => {
    return async (dispatch) => {
        const response = (await axios.get("http://localhost:3001/recipes")); //console.log("DESDE", json.data.response);
        return dispatch({
            type: "GET_RECIPES",
            payload: response.data,
        });
    };
};

export const getRecipesByName = (recipe) => {
    return async (dispatch) => {
        try {
            let response = (await axios.get(`http://localhost:3001/recipes/name?name=${recipe}`))
            return dispatch({
                type: "GET_NAME_RECIPE",
                payload: response.data
            });
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('No se ha encontrado una receta con este nombre')
            } else {
                console.log(error);
            }
        }
    }
};

export const getDiets = () => async (dispatch) => {
    try {
        const response = (await axios.get(`http://localhost:3001/diets`))
        return dispatch({
            type: "GET_DIETS",
            payload: response.data
        })
    } catch (error) {
        return error.message
    }
}

export const getRecipesBD = () => {
    return async (dispatch) => {
        const response = (await axios.get("http://localhost:3001/recipesBD")); //console.log("DESDE", json.data.response);
        return dispatch({
            type: "GET_RECIPES_BD",
            payload: response.data,
        });
    };
}

//PARA MOSTRAR SOLO RECETAS DE API
// export const getRecipesAPI = () => {
//     return async (dispatch) => {
//         const response = (await axios.get("http://localhost:3001/recipesAPI"));
//         return dispatch({
//             type: "GET_RECIPES_API",
//             payload: response.data,
//         })
//     }
// }


//METODO POST
export const postRecipe = (recipe) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:3001/recipes`, recipe)
        return dispatch({
            type: "POST_RECIPE",
            payload: response
        })
    } catch (error) {

    }
}


//ORDENAMIENTO Y FILTRADO

export const filterTypeDiets = (payload) => {
    return {
        type: 'FILTER_DIETS',
        payload
    }
};

export const orderRecipesByName = (payload) => {
    return {
        type: 'ORDER_NAME',
        payload
    }
};

export const orderRecipesByHealth = (payload) => {
    return {
        type: 'ORDER_HEALTH',
        payload
    }
};
