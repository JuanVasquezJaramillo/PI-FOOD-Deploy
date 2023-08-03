import { useParams } from 'react-router-dom';
import SearchBar from '../homePage/searchBar';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesByName } from '../../Redux/actions';
import estilo from '../detailPage/detailpage.module.css'
import cuchillo from '../../assets/cuchillo.png'
import tenedor from '../../assets/tenedor.png'

const Detail = () => {
    const {name} = useParams();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRecipesByName(name));
    }, [dispatch, name])

    const res = useSelector((state)=> state.recipes)
    
    const pasos = res[0].analyzedInstructions?.map((prop)=>prop.steps.map((prop)=>prop.step))

    console.log("PROBANDO DETAIL", res);
   
    return(
    <div>
        <div className={estilo.prueba}>
        <SearchBar/>
        </div>
            <div className={estilo.card}>
                {
                    res?
                    <div>
                    <h1>ID: {res[0].id ? res[0].id : res[0].id}</h1>
                    <img src={tenedor} className={estilo.tamaNio} alt='NOT FOUND TENEDOR.png'></img>
                    <img className={estilo.imagen} src={res[0].image ? res[0].image : res[0].Imagen} alt='NOT FOUND RECIPE IMG'></img>
                    <img src= {cuchillo} alt='NOT FOUND CUCHILLO.png'></img>
                    <h1>Nombre: </h1>
                    <h2>{res[0].title ? res[0].title : res[0].Nombre}</h2>
                    <h2>RESUMEN: </h2>
                    <p>{res[0].summary ? res[0].summary.replace(/<[^>]*>?/g, "") : res[0].Resumen_Del_Plato}</p>
                    <h1>Healthly level: {res[0].healthScore ? res[0].healthScore : res[0].Health_Score}</h1>
                    <h2>PASO A PASO:</h2>
                    <p>{pasos ? pasos : res[0].Paso_A_Paso}</p>
                    <h2>Dietas: </h2>
                    <p>{res[0].diets ? res[0].diets.join(', ') : res[0].Diets}</p>
                    </div>
                    :
                    <h1>No se encontraron detalles...</h1>
                }
            </div>
    </div>
)
}


export default Detail;