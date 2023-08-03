import { Link } from 'react-router-dom';
import estilo from '../loadingPage/loadingPage.module.css'
import imgCuchara from '../../assets/cuchara.png'
const loading = () => {
    return (
    <div className={estilo.contenedor}>
        <div className={estilo.subContenedor}><h1>BIENVENIDOS</h1></div>
        <div className={estilo.subContenedor}> 
                <img src={imgCuchara} alt="" className={estilo.image} />           
        </div>
        <div className={estilo.subContenedor2}>
                <Link to={'/home'}>
                <button className={estilo.pruebaBoton}>¡A cocinar!</button>
                </Link>
        </div>
    </div>
    )
}

export default loading;