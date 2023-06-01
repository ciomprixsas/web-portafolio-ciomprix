import React, { useState, useEffect } from "react";
import axios from "axios";

const PageContex = React.createContext();

export const PageProvider = (props) => {
  //Crea contexto para lectura global al JSON
  const [solutions, setSolutions] = useState(undefined);

  /*const getData = () => {
    //Lectura del JSON
    fetch("page_data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setPageInfo({ ...myJson});
        return myJson;
      })
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

  const getCategoriesBySolution = async (id,setter) => {
    setter((await pageApi.get('categoriesBySolution/'+id)).data)
  }

  const getStorageByCategory = async (id,setter) => {
    setter((await pageApi.get('storagesByCategory/'+id)).data)
  }

  useEffect(()=>{
    getSolutions()
  },[])

  const value = {
    solutions,getCategoriesBySolution,getStorageByCategory
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
