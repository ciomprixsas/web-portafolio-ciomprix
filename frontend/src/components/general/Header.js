import * as React from "react"
import * as General from "./GeneralModules"
import { usePageContext } from "../../contexts/page_context"

export default function Header({logo}){
    const {pageInfo} = usePageContext();
    
    return (
        <>
            <header className="flex items-center flex-row h-32 text-l px-24 bg-blue-400 openBold text-white">
                <img src={logo} alt="logo" className="h-1/3 w-auto" />
                <nav className="w-full">
                </nav>
            </header>
        </>
    )
    /*
                        <General.List items={global.categories} styles={"flex flex-row justify-end"} props={{className:"m-3"}}>
                                
                        </General.List>
                <General.Link>
                </General.Link>
                
    
    */
}