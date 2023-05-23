import * as React from "react"
import { usePageContext } from "../contexts/page_context"

//Componentes
import * as General from "../components/general/GeneralModules"
import CategoryMiniCard from "../components/CategoryMiniCard"
import SectionCard from "../components/SectionCard"
import CategoryCarousel from "../components/CategoryCarousel"

export default function Landing(){
    
    const {pageInfo} = usePageContext();
    //!(pageInfo===undefined) && console.log(pageInfo.Categories[0].sections)

    return (
        <>
        <General.BgImage src={"/assets/img/landing_bg.svg"} props={{className:"w-screen landingBg"}}>
            <General.Header/>
            <main className='w-full relative z-20 text-white '>
                <div className="px-48">
                    <h1 className="text-6xl mt-48 openBold">Conoce nuestro <br/> portafolio de servicios</h1>
                    <h2 className="text-4xl mt-5 openMedium">La forma de generar aprendizaje <br/> más fácil</h2>
                    <ul className="w-full grid grid-cols-4 gap-4 mt-44">
                        {!(pageInfo===undefined) && 
                            <General.List items={pageInfo.Categories} rprops={[["src","icon"],["key","id"]]} c={"title"}>
                                <CategoryMiniCard />
                            </General.List>
                        }
                    </ul>
                </div>
                {!(pageInfo===undefined) && 
                    <CategoryCarousel title={"alsdhalj"} listProps={{items:pageInfo.Categories[0].sections,rprops:[["title","title"]]}} wItems="">
                        <SectionCard src="/assets/img/imagedefaul.png"></SectionCard>
                    </CategoryCarousel>
                }
            </main>
        </General.BgImage>
        <General.Footer/>
        </>
    )
}