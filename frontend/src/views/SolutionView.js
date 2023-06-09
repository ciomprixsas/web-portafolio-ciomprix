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


export const BASE_URL = process.env.REACT_APP_URL;

const SolutionView = ({title,category,description}) => {
    const {width,heigth} = useScreenSize()

    const {getStorage,rateCharged} = usePageContext()
    
    const [storage,setStorage] = useState()
    const [charged,setCharged] = useState()

    const setData = async() => {
        let a=await getStorage(category.id_category)
        setStorage(a)
    }

    if(storage===undefined)setData()

    
    useEffect(()=>{
        setCharged(rateCharged())
    })

    return (
        <>
        {/*(!charged) && <Loading/>*/}
            <General.BgImage
                src={(width<1024)?(BASE_URL+'/assets/img/landing_bgmini.svg'):(BASE_URL+'/assets/img/landing_bg.svg')} 
                className='w-screen bg-no-repeat landingBg'
            >
                <General.Header mode="dark"/>
                <main className='text-black relative z-20 pb-16 text-white px-4 lg:px-16 xl:px-28 2xl:px-48' >
                    <General.Trigger 
                        className={"inline-block my-8 ml-4 transition-all duration-200 hover:scale-110 active:scale-90 lg:ml-0"} 
                        href={"/"}
                        mode="navigate"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />  Volver
                    </General.Trigger>
                    <h1 className="w-3/4 text-4xl ml-4 openBold lg:w-1/4 lg:ml-0 lg:text-5xl">{title}</h1>
                    <p className="w-3/4 mt-6 ml-4 text-xl openMedium lg:w-1/4 lg:ml-0 lg:text-2xl">{description}</p>
                    {!(storage===undefined)&&
                    <ContentGrid className={`mt-52`} storage={storage} title={category.tittle_category}/>
                    }
                </main>
            </General.BgImage>
            <General.Footer/>
        </>
    );
}

export default SolutionView