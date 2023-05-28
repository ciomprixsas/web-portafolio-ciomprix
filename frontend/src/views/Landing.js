import { usePageContext } from '../contexts/page_context'
import { useRef,useEffect } from 'react'

//Componentes
import * as General from '../components/general/GeneralModules'
import CategoryMiniCard from '../components/CategoryMiniCard'
import CategoryCarousel from '../components/CategoryCarousel'

const Landing = () => {

    const {pageInfo,pageInfoApi} = usePageContext();
    
    const widthBgRef = useRef(null)

    useEffect(()=>{
        if(widthBgRef.current.offsetWidth!=undefined) global.widthPage = (widthBgRef.current.offsetWidth)
    })

    console.warn(global.widthPage)

    return (
        <>
        <General.BgImage 
            src={(global.naveType==="movile"  || global.widthPage>450)?('/assets/img/landing_bgmini.svg'):('/assets/img/landing_bg.svg')} 
            className='w-screen bg-no-repeat landingBg'
        >
            <General.Header mode='ligth'/>
            <main className='w-full relative z-20 text-white px-4 lg:px-48' ref={widthBgRef}>
                    <h1 className='text-4xl mt-10 openBold pl-2 lg:mt-28 lg:text-5xl lg:w-7/12  lg:p-0'>Conoce nuestro portafolio de servicios</h1>
                    <h2 className='text-3xl openMedium pl-2 lg:mt-5 lg:text-4xl lg:w-7/12 lg:p-0'>La forma de generar aprendizaje más fácil</h2>
                    <ul className='grid mt-44 grid-cols-2 gap-4 flex-wrap w-full lg:grid-cols-4'>
                        {!(pageInfo===undefined) && 
                            <General.Cloner items={pageInfo.Categories} rprops={[['src','icon'],['key','id'],['children','title']]}>
                                <CategoryMiniCard />
                            </General.Cloner>
                        }
                    </ul>
                {!(pageInfo===undefined) && 
                <General.Cloner items={pageInfo.Categories} rprops={[['title','title'],['key','id'],['solutions','sections']]}>
                    <CategoryCarousel jump={4}/>
                </General.Cloner>
                }
            </main>
        </General.BgImage>
        <General.Footer/>
        <General.Modal state={false} className='w-[50vw]'>
                <General.Video url='/assets/vid/OPM_WP_3.mp4' className={`mt-3`}/>
        </General.Modal>
        </>
    )
}

export default Landing