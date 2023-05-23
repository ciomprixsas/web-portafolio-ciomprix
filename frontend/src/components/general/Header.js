import * as React from "react"
import * as General from "./GeneralModules"
import { usePageContext } from "../../contexts/page_context"

export default function Header({mode}){

    const {pageInfo} = usePageContext();
    
    return (
        <>  
            <header className={`flex w-full items-center flex-row h-32 text-l px-24 openMedium bg-transparent ${(mode === "ligth")?"text-white":"text-black"}`} >
                {!(pageInfo===undefined) &&
                <a href="/land">
                    <img src={(mode === "ligth")?pageInfo.Logo[0]:pageInfo.Logo[1]} alt="logo" className="h-1/3 w-auto z-10" />
                </a>
                }
                <nav className="w-full z-10 h-full h-full flex flex-row justify-end items-center">
                        {!(pageInfo===undefined) && 
                            <General.Cloner items={pageInfo.Categories} props={{className:`px-5  h-full py-12 headerA ${(mode === "ligth")?"hover:bg-blue-400":"hover:bg-gray-200"}`}} rprops={[["href","route"],["children","title"],["key","id"]]}>
                                <a/>
                            </General.Cloner>
                        }
                </nav>
            </header>
        </>
    )
}