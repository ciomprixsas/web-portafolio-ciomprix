import * as React from "react";
import * as General from "../components/general/GeneralModules";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import SectionGrid from "../components/SectionGrid";
import SectionCard from "../components/SectionCard";

const SectionView = ({categorie}) => {
    return (
        <>
            <General.BgImage src={""} className="w-screen landingBg">
                <General.Header mode="dark"/>
                <main className='text-black mx-48'>
                    <General.Button className={"my-10"}>
                        <FontAwesomeIcon icon={faArrowLeft} /> Volver
                    </General.Button>
                    <h1 className="text-5xl openBold w-1/3">Nuestras {categorie.title}</h1>
                    <SectionGrid className={`mt-48 mb-16`} listProps={{items:categorie.sections,rprops:[["title","title"],["key","title"]]}}>
                        <SectionCard src="/assets/img/imagedefaul.png" className={"w-full"}/>
                    </SectionGrid>
                </main>
            </General.BgImage>
            <General.Footer/>
        </>
    );
}

export default SectionView