import React, { useState, useEffect } from "react";
import axios from "axios";

const PageContex = React.createContext();

export const PageProvider = (props) => {
  //Crea contexto para lectura global al JSON
  const [pageInfo, setPageInfo] = useState(undefined);
  const [pageInfoApi, setPageInfoApi] = useState(undefined);

  const getData = () => {
    //Lectura del JSON
    fetch("page_data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setPageInfo({ ...myJson});
        return myJson;
      })
  };

  const getDataApi = () => {
    //Lectura del JSON
    axios
      .get("https://test-api-ciom-production.up.railway.app/api/solutions")
      .then(function (response) {
        setPageInfoApi({...response.data})
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  useEffect(() => {
    getDataApi()
    if (pageInfo == undefined) getData();
  }, [])

  const value = {
    pageInfo,
    pageInfoApi
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
