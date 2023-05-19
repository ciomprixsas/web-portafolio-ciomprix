import * as React from "react"
import * as General from "../components/general/GeneralModules"
import CategoryMiniCard from "../components/CategoryMiniCard"
import { usePageContext } from "../contexts/page_context"

export default function Landing(){
    
    const {pageInfo} = usePageContext();

    return (
        <>
        <General.BgImage src={"/assets/img/landing_bg.svg"} props={{className:"bg-cover w-screen bg-right-top"}}>
            <General.Header/>
            <main className='w-full relative z-20 text-white'>
                <h1 className="text-6xl mt-48 ml-48 openBold">Conoce nuestro <br/> portafolio de servicios</h1>
                <h2 className="text-4xl mt-5 ml-48 openMedium">La forma de generar aprendizaje <br/> más fácil</h2>
                <ul className="w-full flex flex-row justify-center mt-44">
                    {!(pageInfo===undefined) && 
                        <General.List items={pageInfo.Categories} rprops={[["src","icon"]]}>
                            <CategoryMiniCard />
                        </General.List>
                    }
                </ul>
            </main>
        </General.BgImage>
        <General.Footer/>
        </>
    )
}