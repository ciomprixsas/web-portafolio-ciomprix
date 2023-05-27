import { usePageContext } from "../contexts/page_context"

//Componentes
import * as General from "../components/general/GeneralModules"
import CategoryMiniCard from "../components/CategoryMiniCard"
import SolutionCard from "../components/SolutionCard"
import CategoryCarousel from "../components/CategoryCarousel"

const Landing = () => {
    
    const {pageInfo,pageInfoApi} = usePageContext();
    //!(pageInfo===undefined) && console.log(pageInfo.Categories[0].sections)

    //console.log(pageInfoApi)

    return (
        <>
        <General.BgImage src={"/assets/img/landing_bg.svg"} className="w-screen landingBg">
            <General.Header mode="ligth"/>
            <main className='w-full relative z-20 text-white px-48'>
                    <h1 className="text-5xl mt-28 openBold">Conoce nuestro <br/> portafolio de servicios</h1>
                    <h2 className="text-4xl mt-5 openMedium">La forma de generar aprendizaje <br/> más fácil</h2>
                    <ul className="w-full grid mt-44 grid-flow-col">
                        {!(pageInfo===undefined) && 
                            <General.Cloner items={pageInfo.Categories} rprops={[["src","icon"],["key","id"],["children","title"]]}>
                                <CategoryMiniCard />
                            </General.Cloner>
                        }
                    </ul>
                {!(pageInfo===undefined) && 
                <General.Cloner items={pageInfo.Categories} rprops={[["title","title"],["key","id"]]}>
                    <CategoryCarousel listProps={{items:pageInfo.Categories[0].sections,rprops:[["title","title"],["key","title"]]}}>
                    </CategoryCarousel>
                </General.Cloner>
                }
            </main>
        </General.BgImage>
        <General.Footer/>
        <General.Modal state={false} className="w-[50vw]">
                <General.Video url="/assets/vid/OPM_WP_3.mp4" className={`mt-3`}/>
        </General.Modal>
        </>
    )
}

export default Landing