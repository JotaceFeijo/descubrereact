//para manejar y proveernos de datos
import axios from "axios"
const URL = process.env.REACT_APP_API;

//creamos la funcion obtenerCategorias
const obtenerCategorias = async (page = 1, limit = 10)=>{
    try {
        const endPoint = `${URL}/Categorias?page=${page}&limit=${limit}`
        const {data, status}= await axios.get(endPoint)
        if(status===200){
            return data
        }else{
            throw Error("Error al obtener datos")
        }
    } catch (error) {
        throw error
    }
}

export{
    obtenerCategorias
}