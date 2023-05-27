import * as React from "react";
import * as General from "../components/general/GeneralModules";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import SolutionGrid from "../components/SolutionGrid";
import SolutionCard from "../components/SolutionCard";

const SectionView = ({categorie}) => {
    return (
        <>
            <General.BgImage src={"/assets/img/landing_bg.svg"} className="w-screen landingBg">
                <General.Header mode="dark"/>
                <main className='text-black mx-48'>
                    <General.Link 
                        className={"my-10 transition-all duration-200 hover:scale-110 active:scale-90 "} 
                        href={"/"}
                        mode="navigate"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} /> Volver
                    </General.Link>
                    <h1 className="text-5xl openBold w-1/3">Nuestras {categorie.title}</h1>
                    <SolutionGrid className={`mt-48 mb-16`} listProps={{items:categorie.sections,rprops:[["title","title"],["key","title"]]}}>
                        <SolutionCard src="/assets/img/imagedefaul.png" className={"w-full"}/>
                    </SolutionGrid>
                </main>
            </General.BgImage>
            <General.Footer/>
        </>
    );
}

export default SectionView