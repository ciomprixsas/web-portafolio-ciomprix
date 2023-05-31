//Importacion de componentes
import * as General from "../components/general/GeneralModules";
import SolutionGrid from "../components/SolutionGrid";

//Importacion de iconos
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"

const SolutionView = ({categorie}) => {
    
    console.log('solution')
    return (
        <>
            <General.BgImage
                src={(global.naveType==="movile"  || global.widthPage<450)?('/assets/img/landing_bgmini.svg'):('/assets/img/landing_bg.svg')} 
                className='w-screen bg-no-repeat bg-gray-700 landingBg'
            >
                <General.Header mode="dark"/>
                <main className='text-black relative z-20 text-white px-4 lg:px-48'>
                    <General.Trigger 
                        className={"inline-block my-8 ml-4 transition-all duration-200 hover:scale-110 active:scale-90 lg:ml-0"} 
                        href={"/"}
                        mode="navigate"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />  Volver
                    </General.Trigger>
                    <h1 className="w-3/4 text-4xl ml-4 openBold lg:w-1/4 lg:ml-0 lg:text-5xl">Nuestras {categorie.title}</h1>
                    <SolutionGrid className={`mt-52 mb-16`} items={categorie.sections}>
                    </SolutionGrid>
                </main>
            </General.BgImage>
            <General.Footer/>
        </>
    );
}

export default SolutionView