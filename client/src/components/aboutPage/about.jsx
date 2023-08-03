import estilo from '../aboutPage/about.module.css'
import NavBar from '../homePage/searchBar';
import fondo from '../../assets/fondoCocina.jpg'
import fondoNav from '../../assets/wallPaperFood.jpg'
import Cuchara from '../../assets/cuchara.png'
import Cuchillo from '../../assets/cuchillo.png'
import Tenedor from '../../assets/tenedor.png'
import icono from '../../assets/icons8-cubiertos-48.png'

const About = ()=>{
    return(
        <div className={estilo.contenedor}>
            <div className={estilo.navBar}>
            <NavBar/>
            </div>
            <div className={estilo.subContenedor}>
                <h1>RECURSOS UTILIZADOS</h1>
                
                <a target='_blank' rel="noreferrer" href="https://es.pngtree.com/freebackground/517-food-festival-cartoon-childish-food-geometry-yellow-background_1037351.html" title='Es la imagen de fondo'>
                    <h2>Imagen de fondo</h2>
                </a>
                <img src={fondo} alt="" className={estilo.imgFondo} />
                
                <a target='_blank' rel="noreferrer" href='https://i.pinimg.com/564x/9b/31/1a/9b311a3ba470739c9d5e45d92fe0e4b6.jpg' title='Es la imagen de la NavBar'>
                    <h2>Imagen de la navBar</h2>
                </a>
                <img src={fondoNav} alt="" className={estilo.imgNav} />
                
                <a target='_blank' rel="noreferrer" href='https://i.pinimg.com/originals/d2/57/a6/d257a62b574beee823e4ef9d5ac491e0.png' title='Cuchara cartoon del detail'>
                    <h2>Cuchara cartoon</h2>
                </a>
                <img src={Cuchara} alt='' className={estilo.imgSpoon} />
                
                <a target='_blank' rel="noreferrer" href='https://images.vexels.com/media/users/3/216261/isolated/preview/28dc76041da754eb9bc8410711333eb0-ilustracion-de-cuchillo-de-cocina.png' title='Cuchillo cartoon del detail'>
                    <h2>Cuchillo cartoon</h2>
                </a>
                <img src={Cuchillo} alt='' className={estilo.imgSpoon}/>
                
                <a target='_blank' rel="noreferrer" href='https://images.vexels.com/media/users/3/216258/isolated/preview/a352c3e2775f332d29f3b5a281bd2f6d-ilustracion-de-tenedor-de-cocina.png' title='Tenedor cartoon del detail'>
                    <h2>Tenedor cartoon</h2>
                </a>
                <img src={Tenedor} alt='' className={estilo.imgSpoon}/>
                
                
                <a target="_blank"  rel="noreferrer" href="https://icons8.com/icon/108793/cubiertos" title='Icono'>
                    <h2>Icono de cubiertos</h2>
                </a>
                <img src={icono} alt='' className={estilo.imgSpoon}/>
                <a target="_blank" rel="noreferrer" href="https://icons8.com">
                    <p>Icono por: Icons8</p>
                </a>
            </div>
        </div>
    )
}


export default About;