import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const { imagen, isLoading} = useFetchGifs( category)


  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && <h2>Cargando...</h2>
        }
        <div className="card-grid">
            {
              imagen.map( (img) =>(
              <GifItem 
                key={img.id}
                { ...img }//en casos de tener indefinidas propiedades se usar el operador spread"..." para buscar y mostrar todas las propiedades que este tiene 
                // title={img.title}
                // url={img.url}
              />
              ))
            }
        
        </div>
    </>
  )
}
