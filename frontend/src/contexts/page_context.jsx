import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { TbHexagonLetterQ } from "react-icons/tb";

const PageContex = React.createContext();

export const BASE_URL = process.env.REACT_APP_URL;

export const PageProvider = (props) => {
  //Crea contexto para lectura global al JSON

  const cards_img = [BASE_URL+'/assets/img/photo-1574073763042-9dbe6ae03853.webp',BASE_URL+'/assets/img/photo-1594394489103-e4aa367d46da.webp',BASE_URL+'/assets/img/photo-1643513208375-df314b16347a.webp']

  const [charged,setCharged] = useState(false)
  
  const pageApi = axios.create({
    baseURL: 'https://test-api-ciom-production.up.railway.app/api/'
  })

  const usingApi = async(endpoint) => {
    
    return (await pageApi.get(endpoint)).data
  }
  
  const getSolutions = async() => {
    return await usingApi('/solutions')
 }

  const getSolution = async(id) => {
    return await usingApi('/solution/'+id)
  }
  const getCategoriesBySolution = async(id) => {
    return await usingApi('/categoriesBySolution/'+id)
  }
  
  const getCategories = async() => {
    return Object.values(await usingApi('/categories'))
  }

  const getStoragesByCategory = async(id) => {
    return await usingApi('storagesByCategory/')
  }


  const value = {
    getSolution,
    getSolutions,
    getCategories,
    getCategoriesBySolution,
    getStoragesByCategory,
    setCharged,
    charged,
    cards_img,
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
