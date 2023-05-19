import * as React from "react"
import * as General from "./GeneralModules"
import { usePageContext } from "../../contexts/page_context"

export default function Header({logo,props}){

    const {pageInfo} = usePageContext();
    
    return (
        <>  
            <header className="flex w-full items-center flex-row h-32 text-l px-24 bg-transparent openMedium text-white" {...props}>
                <img src={logo} alt="logo" className="h-1/3 w-auto z-10" />
                <nav className="w-full z-10">
                    <ul className="flex flex-row justify-end">
                        {!(pageInfo===undefined) && 
                            <General.List items={pageInfo.Categories} k={"id"} props={{className:"mx-5"}}>
                                <li/>
                            </General.List>
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}