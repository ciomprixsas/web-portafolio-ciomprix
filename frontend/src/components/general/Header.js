import * as React from "react";
import * as General from "./GeneralModules";

export default function Header({logo}){
    console.log(global.tabIndex++);

    return (
        <>
            <header className="flex items-center flex-row h-1/5 text-l px-16 bg-blue-400 openBold">
                <General.Link styles={"h-1/3"}>
                    <img src={logo} alt="logo" className="h-full"/>
                </General.Link>
                <nav className="w-full">
                        <General.List items={global.categories} styles={"flex flex-row"} props={{styles:"m-1"}}>
                                <General.Link styles={"m-3"}>Link</General.Link>
                        </General.List>
                </nav>
            </header>
        </>
    );
}