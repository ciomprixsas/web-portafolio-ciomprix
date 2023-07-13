import React, { useState} from "react"
import axios from "axios"

const PageContex = React.createContext()

export const BASE_URL = process.env.REACT_APP_URL

export const API_URL = process.env.REACT_APP_API_URL

export const PageProvider = (props) => {
  //Crea contexto para lectura global al JSON

  const [solutions,setSolutions] = useState()

  
  const pageApi = axios.create({//Plantilla para acceso a api
    baseURL: API_URL
  })

  const getApi = async(endpoint) => {//Funcion para la funcion GET
    return (await pageApi.get(endpoint)).data
  }

  const postApi = async(endpoint,data) => {//Funcion de metodo POST
    return (await pageApi.post(endpoint,data)).data
  }
  
  const getSolutions = async() => {
    setSolutions(await getApi('solutions'))
 }

  if(!solutions) getSolutions()

  const getSolution = async(id) => {
    return await getApi('solution/'+id)
  }
  const getCategoriesBySolution = async(id) => {
    return await getApi('categoriesBySolution/?id='+id)
  }
  
  const getCategories = async() => {
    return Object.values(await getApi('categories'))
  }
  const getCategory = async(id) => {
    return Object.values(await getApi('category/?id='+id))
  }

  const getStoragesByCategory = async(id) => {
    return await getApi('storagesByCategory/?id='+id)
  }

  const getStorages= async() => {
    return await getApi('storages')
  }

  const getStorage= async(id) => {
    return await getApi('storage/?id='+id)
  }
  
  const getUsers= async() => {
    return await getApi('users')
  }

  const createSolution = (data) =>{
    postApi('/create-solution',data)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err))
  }

  const value = {
    getSolution,
    solutions,
    getCategories,
    getCategory,
    getCategoriesBySolution,
    getStoragesByCategory,
    getStorages,
    getStorage,
    createSolution,
    getUsers
  }

  return <PageContex.Provider value={value} {...props} />;
}

export const usePageContext = () => {
  //Funcion para acceder al JSON
  const contex = React.useContext(PageContex);
  if (!contex) {
    throw new Error("No existe el contexto");
  }
  return contex;
};
