import Card from './cardRecipe';
import estilo from '../homePage/modules/card.module.css'

const Cards = ({allRecipes}) => {
   return( 
      <div className={estilo.list}>
         {
            
            allRecipes?.map(({id, Nombre, Imagen, Diets, Health_Score, title, image, diets}) => {
               return <Card
               // key={id ? id : allRecipes[0].id}
               
                Nombre={Nombre ? Nombre : title}
                Imagen={Imagen ? Imagen : image}
                Diets={Diets ? Diets : diets?.join(', ')}
               
                //   key={id}
               //   Nombre={Nombre}
               //   Imagen={Imagen}
               //   Diets={Diets}
               
               />
            })
         }
      </div>);

      
// Health_Score={Health_Score} Para mostrar HS en la Card
}
export default Cards;

