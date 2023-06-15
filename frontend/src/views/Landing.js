import { usePageContext } from '../contexts/page_context'
import { useRef,useEffect, useState, useCallback } from 'react'

//Componentes
import * as General from '../components/general/GeneralModules'
import SolutionMiniCard from '../components/SolutionMiniCard'
import SolutionsCarousel from '../components/SolutionsCarousel'
import useScreenSize from '../hooks/useScreenSize'
import Loading from './Loading'

export const BASE_URL = process.env.REACT_APP_URL;


const Landing = () => {

    const {width} = useScreenSize()

    const { getSolutions,charged} = usePageContext()

    const [solutions,setSolutions] = useState()
    
    const setData = async() =>{
        setSolutions(await getSolutions())
    }

    if(solutions===undefined)setData()
    

    return (
        <>
        <General.BgImage 
            src={(width<1024)? (BASE_URL+'/assets/img/landing_bgmini.svg'):(BASE_URL+'/assets/img/landing_bg.svg' )} 
            className='w-screen bg-no-repeat landingBg'
        >
        <General.Header mode="ligth"/>
            <main className='w-full relative z-20 text-white px-4 lg:px-16 xl:px-28 2xl:px-48'>
                    <h1 className='text-4xl mt-10 openBold pl-2 lg:mt-28 md:text-5xl md:w-10/12 lg:w-7/12 lg:p-0'>Conoce nuestro portafolio de servicios</h1>
                    <h2 className='text-3xl openMedium pl-2 lg:mt-5 md:text-4xl md:w-10/12 lg:w-7/12 lg:p-0'>La forma de generar aprendizaje más fácil</h2>
                    <ul className='grid mt-44 grid-cols-2 gap-4 flex-wrap w-full md:grid-cols-3 xl:grid-cols-4 2xl:mt-56'>
                        {!(solutions===undefined) && 
                            <General.Cloner items={Object.values(solutions)} rprops={[['key','id_solution'],['children','tittle_solution'],['href','name_solution']]}>
                                <SolutionMiniCard src={BASE_URL + '/assets/img/Categories/g486.png'}/>
                            </General.Cloner>
                        }
                    </ul>
                {!(solutions===undefined) && 
                <General.Cloner items={Object.values(solutions)} rprops={[['key','id_solution'],['title','tittle_solution'],['id','id_solution'],['href','name_solution']]}>
                    <SolutionsCarousel />
                </General.Cloner>
                }
            </main>
        </General.BgImage>
        <General.Footer/>
        </>
    )
}
/**/ 

export default Landing