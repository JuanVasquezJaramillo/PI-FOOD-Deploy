import Paginado from "./paginado";
import { useState } from "react";


const Logica = ({allRecipes}) => {
    
    const [currentPag, setCurrentPag] = useState(1);
    const [cantidadPorPag] = useState(10);
    const indiceUltimaReceta = currentPag * cantidadPorPag
    const indicePrimerReceta = indiceUltimaReceta - cantidadPorPag
    const currentRecipes = allRecipes.slice(indicePrimerReceta, indiceUltimaReceta)

    const paginado = (pageNumber) => {
        setCurrentPag(pageNumber)
    }

    return(
        <>
            <Paginado cantidadPorPag={cantidadPorPag} allRecipes={allRecipes.length} paginado={paginado}/>
        </>
    )
}

export default Logica;