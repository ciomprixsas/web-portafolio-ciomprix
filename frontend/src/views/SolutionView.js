import {useCallback,useEffect,useState} from "react"
//Importacion de componentes
import * as General from "../components/general/GeneralModules"
import ContentGrid from "../components/ContentGrid"
import Loading from "./Loading"

//Importacion de iconos
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { usePageContext } from "../contexts/page_context"
import useScreenSize from '../hooks/useScreenSize'
import { useParams } from "react-router-dom"


export const BASE_URL = process.env.REACT_APP_URL;

const SolutionView = ({title,description,banner}) => {

    const {width} = useScreenSize()

    const {id} = useParams()

    const {getStoragesByCategory,charged,setCharged,getCategory} = usePageContext()
    
    const [storage,setStorage] = useState()
    const [category,setCategory] = useState()

    const setData = async() => {
        let c =((await getCategory(id)))
        setStorage(await getStoragesByCategory(c[0].id))
        setCategory(c[0])
        setCharged(true)
    }

    
    if(!storage){
        setData()
        return <Loading/>
    }
    else if(storage && category){
    return (
        <>
            <General.Header mode="dark" />
            <General.BgImage
                src={banner} 
                className='w-screen bg-no-repeat solutionBg'
            >
                <main className='text-black relative z-20 pb-16 text-black px-4 lg:px-16 xl:px-28 2xl:px-48' >
                    <General.Trigger 
                        className={"inline-block my-8 ml-4 transition-all duration-200 hover:scale-110 active:scale-90 lg:ml-0"} 
                        href={"/"}
                        mode="navigate"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />  Volver
                    </General.Trigger>
                    <h1 className="w-3/4 text-4xl ml-4 openBold lg:w-1/4 lg:ml-0 lg:text-5xl">{title}</h1>
                    <p className="w-3/4 mt-6 ml-4 text-xl openMedium md:1/2 lg:w-1/4 lg:ml-0 lg:text-2xl">{description}</p>
                    <ContentGrid className={`mt-52`} storage={storage} title={category.tittle_c}/>
                </main>
            </General.BgImage>
            <General.Footer/>
        </>
    )}
}

export default SolutionView