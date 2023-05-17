import * as React from "react";
import * as General from "./GeneralModules";
import { useNavigate } from "react-router-dom";

export default function Header({logo}){
    
    const navigate = useNavigate();

    const handleLinkOnClick=(url)=>{
        navigate(url);
    }

    return (
        <>
            <header className="flex items-center flex-row h-32 text-l px-24 bg-blue-400 openBold text-white">
                <General.Link>
                    <img src={logo} alt="logo" className="h-1/3 w-auto" onClick={()=>handleLinkOnClick("/")}/>
                </General.Link>
                
                <nav className="w-full">
                        <General.List items={global.categories} styles={"flex flex-row justify-end"} props={{styles:"m-1"}}>
                                <General.Link styles={"m-3"}>Link</General.Link>
                        </General.List>
                </nav>
            </header>
        </>
    );
}