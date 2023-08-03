import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import estilo from './modules/homePage.module.css'
const SearchBar = () => {

   const location = useLocation();
   return (
      <div>
         <div className={estilo.crear}>
            {
               location.pathname === '/form' 
                  ?
                  <button disabled id='btnForm'></button>
                  :
                  <Link to='/form'>
                     <button title='CREA UNA RECETA' className={estilo.boton}>CREA UNA RECETA</button>
                  </Link>
            }
            {
               location.pathname === '/home' 
                  ?
                  <button disabled id='btn'></button>
                  :
                  <Link to='/home'>
                     <button title='INICIO' className={estilo.boton} id='btn'>INICIO</button>
                  </Link>
            }
            {
               location.pathname === '/about' 
               ?
               <button disabled id='btnAbout'></button>
               :
               <Link to='/about'>
                  <button title='CRÉDITOS' className={estilo.boton}>CRÉDITOS</button>
               </Link>
            }
         </div>
      </div>
   );
}
export default SearchBar;