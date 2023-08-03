import estilo from '../../components/homePage/modules/paginado.module.css'

const Paginado = ({ cantidadPorPag, allRecipes, paginado }) => {
    const paginasDisponibles = []

    for (let i = 1; i <= Math.ceil(allRecipes / cantidadPorPag); i++) {
        paginasDisponibles.push(i)
    }

    return (
        <div>
                {paginasDisponibles && paginasDisponibles.map(number => (
                    <div className={estilo.contenedor} key={number}>
                            <button className={estilo.buttonpage} onClick={() => paginado(number)}> {number}  </button>
                    </div>
                ))}
        </div>
    )
}
export default Paginado






