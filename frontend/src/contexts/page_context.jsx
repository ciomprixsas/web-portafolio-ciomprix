import React, { useState, useEffect } from "react";
import axios from "axios";

const PageContex = React.createContext();

export const BASE_URL = process.env.REACT_APP_URL;

export const PageProvider = (props) => {
  //Crea contexto para lectura global al JSON
  const [solutions, setSolutions] = useState(undefined);

  const cards_img = [BASE_URL+'/assets/img/photo-1574073763042-9dbe6ae03853.webp',BASE_URL+'/assets/img/photo-1594394489103-e4aa367d46da.webp',BASE_URL+'/assets/img/photo-1643513208375-df314b16347a.webp']

  /*const setData = async() => {
    console.log(await getSolutions1())
  };*/

  const pageApi = axios.create({
    baseURL: 'https://test-api-ciom-production.up.railway.app/api/'
  })

  const getSolutions = () => {
    axios
      .get("https://test-api-ciom-production.up.railway.app/api/solutions")
      .then(function (response) {
        setSolutions({...response.data})
      }).then()
      .catch(function (error) {
        console.error(error);
      })
  }
  const getSolution = async(id) => {
     return ((await pageApi.get('solution/'+id)).data)
  }
  const getCategories = async(id) => {
      return(Object.values((await pageApi.get('categoriesBySolution/'+id)).data))
  }
  
  const getAllCategories = async(id) => {
    return(Object.values((await pageApi.get('categories')).data))
  }

  const getCategoriesBySolution = async (id,setter) => {
    setter((await pageApi.get('categoriesBySolution/'+id)).data)
  }

  const getStorageByCategory = async (id,setter) => {
    setter((await pageApi.get('storagesByCategory/'+id)).data)
  }

  const getStorage = async(id) => {
    return ((await pageApi.get('storagesByCategory/'+id)).data)
  }

  
  useEffect(()=>{
    getSolutions()
  },[])

  const value = {
    solutions,
    getCategoriesBySolution,
    getStorageByCategory,
    getSolution,
    getCategories,
    getAllCategories,
    getStorage,
    cards_img
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
