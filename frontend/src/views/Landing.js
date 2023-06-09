import { usePageContext } from '../contexts/page_context'
import { useEffect, useState} from 'react'

//Componentes
import * as General from '../components/general/GeneralModules'
import SolutionMiniCard from '../components/SolutionMiniCard'
import SolutionsCarousel from '../components/SolutionsCarousel'
import useScreenSize from '../hooks/useScreenSize'
import Loading from './Loading'

export const BASE_URL = process.env.REACT_APP_URL;


const Landing = () => {

    const {width} = useScreenSize()

    //Acceso a las funciones de la api
    const {solutions,getCategoriesBySolution} = usePageContext()

    const [charged,setCharged] = useState(false)

    const [localSolutions,setLocalSolutions] = useState()

    global.basepathname = (window.location.pathname)

    //Configuración de objetos para correcta configuración de componentes
    const setData = async() =>{
        let s = Object.values(solutions)
        for(let a of s){
            a.categories = await getCategoriesBySolution(a.id)
            for(let b of a.categories){
                b.route = a.route_s+'/'+ b.id
            }
        }
        setLocalSolutions(s)
        setCharged(true)
    }

    //Funcionamiento de hash desde una dirección diferente
    useEffect(()=>{
        if(window.location.hash){
            setTimeout(()=>{
            let h = window.location.hash
            window.location.hash=null
            window.location.hash=h}
            ,2000)
        }
    },[localSolutions])

    //Control de vista de carga
    if(!charged || !localSolutions){
        setData()
        return <Loading/>
    }
    else if(localSolutions){
        return (
            <>
            <General.BgImage 
                src={(width<1024)? (BASE_URL+'/assets/img/landing_bgmini.svg'):(BASE_URL+'/assets/img/landing_bg.svg' )} 
                className='w-screen bg-no-repeat landingBg'
            >
            <General.Header mode="ligth" items={solutions}/>
                <main className='w-full relative z-20 text-white px-4 lg:px-16 xl:px-28 2xl:px-48'>
                    <h1 className='text-4xl mt-10 openBold pl-2 lg:mt-28 md:text-5xl md:w-10/12 lg:w-7/12 lg:p-0'>Conoce nuestro portafolio de servicios</h1>
                    <h2 className='text-3xl openMedium pl-2 lg:mt-5 md:text-4xl md:w-10/12 lg:w-7/12 lg:p-0'>La forma de generar aprendizaje más fácil</h2>
                    <ul className='grid mt-44 grid-cols-2 gap-4 flex-wrap w-full md:grid-cols-3 xl:grid-cols-4 2xl:mt-56'>
                    <General.Cloner items={Object.values(solutions)} rprops={[['key','id'],['children','tittle_s'],['href','route_s'],['src','img_s']]}>
                        <SolutionMiniCard src={BASE_URL + '/assets/img/Categories/g486.png'}/>
                    </General.Cloner>
                    </ul>
                    <General.Cloner items={Object.values(solutions)} rprops={[['key','id'],['title','tittle_s'],['id','id'],['href','route_s'],['element','categories']]}>
                        <SolutionsCarousel />
                    </General.Cloner>
                </main>
            </General.BgImage>
            <General.Footer/>
            </>
        )
    }
}
/**/ 

export default Landing