import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [ imagen, setImagen] = useState([]);
    const [ isLoading, setIsLoding] = useState(true);

    const getImagen = async() => {
        const newImagen = await getGifs( category);
        setImagen(newImagen);
        setIsLoding(false)
    }

    useEffect(()=>{
        getImagen()
        
    }, [])

  return {
    imagen,
    isLoading
  }
}
