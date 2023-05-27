import * as React from "react";
import * as General from "../components/general/GeneralModules";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import SolutionGrid from "../components/SolutionGrid";
import SolutionCard from "../components/SolutionCard";

const SolutionView = ({categorie}) => {
    return (
        <>
            <General.BgImage src={"/assets/img/landing_bg.svg"} className="w-screen landingBg">
                <General.Header mode="dark"/>
                <main className='text-black mx-48 mb-48'>
                    <General.Link 
                        className={"inline-block my-8 transition-all duration-200 hover:scale-110 active:scale-90 "} 
                        href={"/"}
                        mode="navigate"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />  Volver
                    </General.Link>
                    <h1 className="w-1/4 text-5xl openBold">Nuestras {categorie.title}</h1>
                    <SolutionGrid className={`mt-52 mb-16`} listProps={{items:categorie.sections,rprops:[["title","title"],["key","title"]]}}>
                        <SolutionCard src="/assets/img/imagedefaul.png" className={"w-[330px] h-64"}/>
                    </SolutionGrid>
                </main>
            </General.BgImage>
            <General.Footer/>
        </>
    );
}

export default SolutionView