import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { TbHexagonLetterQ } from "react-icons/tb";

const PageContex = React.createContext();

export const BASE_URL = process.env.REACT_APP_URL;

export const PageProvider = (props) => {
  //Crea contexto para lectura global al JSON

  const cards_img = [BASE_URL+'/assets/img/photo-1574073763042-9dbe6ae03853.webp',BASE_URL+'/assets/img/photo-1594394489103-e4aa367d46da.webp',BASE_URL+'/assets/img/photo-1643513208375-df314b16347a.webp']

  const [charged,setCharged] = useState(false)

  const [solutions,setSolutions] = useState()
  const [categories,setCategories] = useState()
  const [storage, setStorage] =useState()

  let allCharged=[]
  
  const pageApi = axios.create({
    baseURL: 'https://test-api-ciom-production.up.railway.app/api/'
  })

  const setAllData = async() => {
    setSolutions((await pageApi.get('solutions')).data)
    setCategories((await pageApi.get('categories')).data)
    setStorage((await pageApi.get('storages')).data)
    setCharged(true)
  }

  if(!charged)setAllData()


  const usingApi = async(endpoint) => {
    //allCharged.push(false)
    let index=allCharged.length-1
    let data =(await pageApi.get(endpoint)).data
    allCharged[index]=true
    return (data)
  }
  
  const getSolutions = async() => {
    return solutions
 }

  const getSolution = async(id) => {
    try{
      for(let s of solutions){
        if(s.id_solution===id)return s
      }
      throw 'Solution no found'
    }
    catch(e){
      console.log(e)
    }
  }
  const getCategories = async(id) => {
    try{
      let cat = []
      for(let c of categories){
        if(c.id_solution===id) cat.push(c)
      }
      if(cat.length == 0) throw 'Categories no found'
      else return Object.values(cat)
    }
    catch(e){
      console.log(e)
    }
  }
  
  const getAllCategories = async() => {
    return Object.values(categories)
  }

  const getStorage = async(id) => {
    try{
      let sto = []
      for(let s of storage){
        if(s.id_category===id) sto.push(s)
      }
      if(sto.length == 0) throw 'Object not found'
      else return Object.values(sto)
    }
    catch(e){
      console.log(e)
    }

    return await usingApi('storagesByCategory/'+id)
  }


  const value = {
    getSolution,
    getSolutions,
    getCategories,
    getAllCategories,
    getStorage,
    charged,
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
