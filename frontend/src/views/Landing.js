import * as React from "react"
import * as General from "../components/general/GeneralModules"

export default function Landing(){
    
    return (
        <>
        <General.BgImage src={"/assets/img/landing_bg.svg"} props={{className:"bg-cover w-screen bg-right-top"}}>
            <General.Header logo={"/assets/img/ciomprix_logo.png"}/>
            <main className='w-full relative z-20'>
                
                <div className="w-7/12 flex flex-col h-screen flex-wrap items-end justify-center text-white">
                    <h1 className="text-6xl w-10/12 h-auto openBold">Conoce nuestro portafolio de servicios</h1>
                    <h2 className="w-10/12 text-2xl openMedium w-2/3 mt-5">La forma de generar aprendizaje más fácil</h2>
                </div>
            </main>
        </General.BgImage>
        </>
    )
}