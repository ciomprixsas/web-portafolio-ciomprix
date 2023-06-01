import {useCallback,useEffect,useState} from "react"
//Importacion de componentes
import * as General from "../components/general/GeneralModules"
import SolutionGrid from "../components/SolutionGrid"

//Importacion de iconos
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { usePageContext } from "../contexts/page_context"
import useScreenSize from '../hooks/useScreenSize'


export const BASE_URL = process.env.REACT_APP_URL;

const SolutionView = ({ID,title}) => {
    const [id,setId] = useState(ID)   

    const {width,heigth} = useScreenSize()

    const {getCategoriesBySolution} = usePageContext()
    
    const [categories, setCategories] = useState(undefined)

    const settingCategories = useCallback((a) => setCategories(a))

    useEffect(()=>{
        if(categories===undefined)getCategoriesBySolution(id,settingCategories)
    },[])

    return (
        <>
            <General.BgImage
                src={(global.naveType==="movile"  || width<450)?(BASE_URL+'/assets/img/landing_bgmini.svg'):(BASE_URL+'/assets/img/landing_bg.svg')} 
                className='w-screen bg-no-repeat bg-gray-700 landingBg'
            >
                <General.Header mode="dark"/>
                <main className='text-black relative z-20 pb-16 text-white px-4 lg:px-48'>
                    <General.Trigger 
                        className={"inline-block my-8 ml-4 transition-all duration-200 hover:scale-110 active:scale-90 lg:ml-0"} 
                        href={"/"}
                        mode="navigate"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />  Volver
                    </General.Trigger>
                    <h1 className="w-3/4 text-4xl ml-4 openBold lg:w-1/4 lg:ml-0 lg:text-5xl">Nuestras {title}</h1>
                    {!(categories===undefined)&&
                    <SolutionGrid className={`mt-52`} items={Object.values(categories)}/>
                    }
                </main>
            </General.BgImage>
            <General.Footer/>
        </>
    );
}

export default SolutionView