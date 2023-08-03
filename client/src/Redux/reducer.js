const initialState = {
    recipes: [],
    diets: [],
    detail: [],
    copyRecipes: [],
}

const reducer = (state = initialState, action) => {
    console.log('desde el reducer', action)

    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                copyRecipes: action.payload,
            }
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload,
            };
        case 'GET_RECIPES_BD':
            return {
                ...state,
                recipes: action.payload,
            }
        //PARA MOSTRAR LAS RECETAS DE LA API    
        // case 'GET_RECIPES_API':
        //     return {
        //         ...state,
        //         recipes: action.payload,
        //     }    
        case "GET_NAME_RECIPE":
            return {
                ...state,
                recipes: action.payload,
            };
        case 'POST_RECIPE':
            return {
                ...state,
            }
        case 'FILTER_DIETS':
            //------ARREGLADO--------
            let p1 = state.recipes.length !== 0
                ? state.copyRecipes.filter((recipe) => recipe.Diets.includes(action.payload))
                : state.recipes.filter((recipe) => recipe.Diets.includes(action.payload))
            if (action.payload === "porDefecto2"){
              p1 = [...state.copyRecipes]  
            }
            return {
                ...state,
                recipes: p1,
            }
        //Ahora filtrar por dietas no deja vacío el array de recetas

        case 'ORDER_NAME':
            //----------ARREGLADO---------
            let probando;
            if (action.payload === "A-Z") {
                probando = [...state.recipes].sort((a, b) => {
                    if (a.Nombre > b.Nombre) return 1;
                    if (b.Nombre > a.Nombre) return -1;
                    return 0;
                })
            } else if (action.payload === "Z-A") {
                probando = [...state.recipes].sort((a, b) => {
                    if (a.Nombre > b.Nombre) return -1;
                    if (b.Nombre > a.Nombre) return 1;
                    return 0;
                })
            } else if (action.payload === "porDefecto") {
                probando = state.copyRecipes;
            }
            return {
                ...state,
                recipes: probando
            }
        //--------Ahora al seleccionar la opción "ordenar", deja las recetas en el orden original


        case 'ORDER_HEALTH':
            //-------------Arreglado-----------
            let orderScore;
            if (action.payload === "MenorHealthScore") {
                orderScore = [...state.recipes].sort((a, b) => {
                    if (a.Health_Score > b.Health_Score) return 1;
                    if (b.Health_Score > a.Health_Score) return -1;
                    return 0;
                })
            } else if (action.payload === "MayorHealthScore") {
                orderScore = [...state.recipes].sort((a, b) => {
                    if (a.Health_Score > b.Health_Score) return -1;
                    if (b.Health_Score > a.Health_Score) return 1;
                    return 0;
                })
            } else if (action.payload === "porDefecto1") {
                orderScore = state.copyRecipes;
            }
            return {
                ...state,
                recipes: orderScore
            }
        //-----------------Ahora al seleccionar la opción "seleccionar filtro", organiza todo por defecto.

        default:
            return { ...state };
    }
}

export default reducer;