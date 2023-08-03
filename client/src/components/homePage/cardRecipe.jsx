import { Link } from 'react-router-dom';
import estilo from './modules/card.module.css'

const Card = ({id, Nombre, Imagen, Diets, Health_Score}) =>{
    return(
            <div className={estilo.contenedor}>
            <Link to={`/detail/${Nombre}`}>
            <img src={Imagen}></img>
            </Link>
            <h1>{Nombre}</h1>
            <h1>Tipo de dieta: {Diets}</h1>
            {/* <h1>HealthScore: {Health_Score}</h1> */}
            </div>
    )
}

export default Card;