import React, { useState , useEffect} from "react"

const PageContex = React.createContext()

export const PageProvider=(props)=>{
    const [pageInfo,setPageInfo] = useState({})

    const getData = () =>{
        fetch('page_data.json')
        .then(function(response){
                return response.json()
        })
        .then(function(myJson) {
            setPageInfo({...myJson[0]})
        })
    }

    useEffect(()=>{
        getData()
    },[])
    
    const value = {
        pageInfo
    }

    return <PageContex.Provider value={value} {...props}/>
}

export const usePageContext=()=>{
    const contex = React.useContext(PageContex)
    if(!contex){
        throw new Error("No existe el contexto") 
    }
    return contex
}