import * as React from "react"
import * as General from "../components/general/GeneralModules"
import CategoryMiniCard from "../components/CategoryMiniCard"

export default function Landing(){
    
    return (
        <>
        <General.BgImage src={"/assets/img/landing_bg.svg"} props={{className:"bg-cover w-screen bg-right-top"}}>
            <General.Header/>
            <main className='w-full relative z-20 text-white'>
                <h1 className="text-6xl mt-48 ml-48 openBold">Conoce nuestro <br/> portafolio de servicios</h1>
                <h2 className="text-4xl mt-5 ml-48 openMedium">La forma de generar aprendizaje <br/> más fácil</h2>
                <ul>
                    <CategoryMiniCard src={"/assets/img/Categories/g486.png"} title={"Categoria titulo"}/>
                </ul>
            </main>
        </General.BgImage>
        <General.Footer/>
        </>
    )
}