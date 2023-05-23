import React, { useState , useEffect} from "react"

const PageContex = React.createContext()

export const PageProvider=(props)=>{//Crea contexto para lectura global al JSON
    const [pageInfo,setPageInfo] = useState(undefined)

    const getData = () =>{//Lectura del JSON
        fetch('page_data.json')
        .then(function(response){
                return response.json()
        })
        .then(function(myJson) {
            setPageInfo({...myJson[0]})
            return myJson
        })
    }

    useEffect(()=>{ 
        if(pageInfo == undefined) getData()
    },[])
    
    const value = {
        pageInfo
    }

    return <PageContex.Provider value={value} {...props}/>
}

export const usePageContext=()=>{//Funcion para acceder al JSON
    const contex = React.useContext(PageContex)
    if(!contex){
        throw new Error("No existe el contexto") 
    }
    return contex
}