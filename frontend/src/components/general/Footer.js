import * as React from "react";
import { usePageContext } from "../../contexts/page_context"


export default function Footer({}){
    const {pageInfo} = usePageContext();
    
    return (
        <>
            <footer className={'flex flex-row bg-gray-900 pl-24 pr-32 text-white openMedium font-normal h-20 items-center content-center'}>
                {!(pageInfo===undefined) &&<img src={pageInfo.Logo[0]} alt="logo" className={'h-8 w-auto'} />}
                <h6 className="w-full align-middle text-center">
                    Copyright derechos reservados de CIOMPRIX 2023
                </h6>
            </footer>
        </>
    );
}