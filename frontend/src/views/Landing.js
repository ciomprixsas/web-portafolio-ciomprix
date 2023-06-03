import { usePageContext } from '../contexts/page_context'
import { useRef,useEffect, useState, useCallback } from 'react'

//Componentes
import * as General from '../components/general/GeneralModules'
import SolutionMiniCard from '../components/SolutionMiniCard'
import SolutionsCarousel from '../components/SolutionsCarousel'
import useScreenSize from '../hooks/useScreenSize'


export const BASE_URL = process.env.REACT_APP_URL;


const Landing = () => {

    const {width} = useScreenSize()

    const {solutions} = usePageContext()

    return (
        <>
        <General.BgImage 
            src={(global.naveType==="movile"  || width<1000)? (BASE_URL+'/assets/img/landing_bgmini.svg'):(BASE_URL+'/assets/img/landing_bg.svg' )} 
            className='w-screen bg-no-repeat landingBg'
        >
        <General.Header mode="ligth"/>
            <main className='w-full relative z-20 text-white px-4 lg:px-16 xl:px-28 2xl:px-48'>
                    <h1 className='text-4xl mt-10 openBold pl-2 lg:mt-28 lg:text-5xl lg:w-7/12  lg:p-0'>Conoce nuestro portafolio de servicios</h1>
                    <h2 className='text-3xl openMedium pl-2 lg:mt-5 lg:text-4xl lg:w-7/12 lg:p-0'>La forma de generar aprendizaje más fácil</h2>
                    <ul className='grid mt-44 grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap w-full lg:grid-cols-4'>
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