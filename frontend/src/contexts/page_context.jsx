import React, { useState, useEffect } from "react";
import axios, { all } from "axios";

const PageContex = React.createContext();

export const BASE_URL = process.env.REACT_APP_URL;

export const PageProvider = (props) => {
  //Crea contexto para lectura global al JSON

  const cards_img = [BASE_URL+'/assets/img/photo-1574073763042-9dbe6ae03853.webp',BASE_URL+'/assets/img/photo-1594394489103-e4aa367d46da.webp',BASE_URL+'/assets/img/photo-1643513208375-df314b16347a.webp']

  const [charged,setCharged] = useState()

  let allCharged=[]
  
  const pageApi = axios.create({
    baseURL: 'https://test-api-ciom-production.up.railway.app/api/'
  })

  const usingApi = async(endpoint) => {
    allCharged.push(false)
    let index=allCharged.length-1
    let data =(await pageApi.get(endpoint)).data
    allCharged[index]=true
    return (data)
  }
  
  const getSolutions = async() => {
    return (await usingApi('solutions'))
 }

  const getSolution = async(id) => {
     return (await usingApi('solution/'+id))
  }
  const getCategories = async(id) => {
      return Object.values(await usingApi('categoriesBySolution/'+id))
  }
  
  const getAllCategories = async() => {
    return Object.values(await usingApi('categories'))
  }

  const getStorage = async(id) => {
    return await usingApi('storagesByCategory/'+id)
  }

  const rateCharged = () => {
    
    console.log("Start")
    for(let ch of allCharged){
        if(!ch){
          console.log(":"+allCharged)
          console.log(false)
          return false
        }
    }
    console.log("charged")
    console.log(allCharged)
    allCharged = []
    return true
  }

  const resetCharged = () =>{
    setCharged([])
  }


  const value = {
    getSolution,
    getSolutions,
    getCategories,
    getAllCategories,
    getStorage,
    charged,
    rateCharged,
    resetCharged,
    cards_img,
    allCharged
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
