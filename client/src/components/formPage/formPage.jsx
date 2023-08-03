import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import estilo from '../formPage/formPage.module.css'
import NavBar from '../homePage/searchBar';
import { getDiets, postRecipe } from '../../Redux/actions';


const Form = () => {

    const dispatch = useDispatch();
    const [recipeInfo, setRecipeInfo] = useState(
        {
            Nombre: '',
            Imagen: '',
            Resumen_Del_Plato: '',
            Health_Score: '1',
            Diets: [],
            Paso_A_Paso: ''
        });
    const listDiets = useSelector((state) => state.diets)
    const lis = listDiets?.map((elemento) => elemento);

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])
    
    console.log("PROBANDO DESDE FORM",listDiets);


    //HANDLERS
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!recipeInfo.Nombre) {
            alert('PRUEBA')
        } else {
            dispatch(postRecipe(recipeInfo))
            console.log("BANDERA FRONT", recipeInfo);
        }
        alert('SE HA CREADO');
        setRecipeInfo({
            Nombre: '',
            Imagen: '',
            Resumen_Del_Plato: '',
            Health_Score: '1',
            Diets: [],
            Paso_A_Paso: ''
        })
    };

    const handleChange = (event) => {
        event.preventDefault();
        setRecipeInfo({
            ...recipeInfo,
            [event.target.name]: event.target.value
        })
        console.log("GOLAZOO", event.target.value);
    };

    const handleDietChange = (event) => {
        if (event.target.checked) {
            setRecipeInfo({ ...recipeInfo, Diets: [...recipeInfo.Diets, event.target.value] })
        }
        if (!event.target.checked) {
            setRecipeInfo({
                ...recipeInfo,
                Diets: recipeInfo.Diets.filter((dieta) => dieta !== event.target.value)
            })
        }
    };   

    return (
        <div>
            <div className={estilo.nav}>
                <NavBar />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={estilo.contenedor}>
                    <div className={estilo.subContenedor}>
                        <label htmlFor="nameRecipe">Nombre de la Receta</label>
                        <input
                            className={estilo.pruebaI}
                            type="text"
                            value={recipeInfo.Nombre}
                            name="Nombre"
                            onChange={(event) => handleChange(event)}
                        />
                        <label style={{color: 'red'}}>{recipeInfo.Nombre.length === 0 && "POR FAVOR LLENA ESTA CASILLA"}</label>

                        <label htmlFor='puntajeSaludable'>Health Score</label>
                        <input
                            className=''
                            name="Health_Score"
                            value={recipeInfo.Health_Score}
                            type="range"
                            min={1}
                            max={100}
                            onChange={(evento) => handleChange(evento)}
                        />
                        <label htmlFor="puntajeEnNumero">{recipeInfo.Health_Score}</label>
                        <label style={{color: 'red'}}>{recipeInfo.Health_Score === '1' && "POR FAVOR ELIGE UN NIVEL"}</label>

                        <label htmlFor="summaryRecipe">Resumen de la Receta</label>
                        <input
                            className={estilo.resumen}
                            type="text"
                            name='Resumen_Del_Plato'
                            value={recipeInfo.Resumen_Del_Plato}
                            onChange={(event) => handleChange(event)}
                        />

                        <label style={{color:'red'}}>{recipeInfo.Resumen_Del_Plato === '' && 'POR FAVOR, AGREGA UN RESUMEN'}</label>

                        <label htmlFor="instructionsRecipe">Paso a paso de la Receta</label>
                        <input
                            className={estilo.resumen}
                            type="text"
                            name='Paso_A_Paso'
                            value={recipeInfo.Paso_A_Paso}
                            onChange={(event) => handleChange(event)}
                        />
                        <label style={{color:'red'}}>{recipeInfo.Paso_A_Paso === '' && 'POR FAVOR, AGREGA EL PASO A PASO'}</label>

                        <label htmlFor="imgRecipe">Agrega una URL para la imagen de la receta!</label>
                        <input
                            className=''
                            type="text"
                            name='Imagen'
                            value={recipeInfo.Imagen}
                            onChange={(evento) => handleChange(evento)}
                        />
                        <img src={recipeInfo.Imagen} alt='No se ha encontrado una imagen'/>
                        

                        <label htmlFor="selectDiet">Selecciona el tipo de dieta</label>
                        <div className={estilo.probandoCheckBOX} onChange={(evento) => handleDietChange(evento)}>
                            {lis.map((elemento) => (
                                <div key={elemento.id} className={''}>
                                    <input 
                                    type="checkbox" 
                                    name="Diets" 
                                    value={elemento.Nombre}
                                    checked={recipeInfo.Diets.includes(elemento.Nombre)}
                                    />
                                    <label>{elemento.Nombre}</label>
                                </div>
                            ))}
                        <label style={{color: 'red'}}>{recipeInfo.Diets.length===0 && 'Selecciona una dieta'}</label>
                        </div>

                        {
                        !recipeInfo.Nombre || 
                        !recipeInfo.Resumen_Del_Plato || 
                        !recipeInfo.Paso_A_Paso || 
                        recipeInfo.Health_Score === '1'  || 
                        recipeInfo.Diets.length===0
                        ? 
                        (
                            <button disabled id='btn'>CREAR</button>
                        ) 
                        : 
                        (
                            <button id='btn'>CREAR</button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;




