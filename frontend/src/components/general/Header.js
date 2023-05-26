import * as React from "react"
import * as General from "./GeneralModules"
import { usePageContext } from "../../contexts/page_context"

export default function Header({mode}){

    const {pageInfo,pageInfoApi} = usePageContext();
    
    return (
        <>  
            <header className={`flex w-full items-center flex-row h-32 text-l px-24 openMedium bg-transparent ${(mode === "ligth")?"text-white":"text-black"}`} >
                {!(pageInfo===undefined) &&
                <General.Link href="/">
                    <img src={(mode === "ligth")?pageInfo.Logo[0]:pageInfo.Logo[1]} alt="logo" className="h-1/3 w-auto z-10" />
                </General.Link>
                }
                <nav className="w-full z-10 h-full h-full flex flex-row justify-end items-center">
                        {!(pageInfoApi===undefined) && 
                            <General.Cloner items={Object.values(pageInfoApi)} props={{className:`px-5  h-full py-12 headerA ${(mode === "ligth")?"hover:bg-blue-400":"hover:bg-gray-200"}`}} rprops={[["href","route"],["children","name_solution"],["key","solution_id"]]}>
                                <General.Link/>
                            </General.Cloner>
                        }
                </nav>
            </header>
        </>
    )
}