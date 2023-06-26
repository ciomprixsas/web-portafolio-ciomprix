import * as React from "react";
import AdmiMenu from "./AdmiMenu";


export const BASE_URL = process.env.REACT_APP_URL;


const AdmiDashboard = () => {

    return(
        <>
        <main className="flex flex-col items-center relative top-36 w-full">
            <div className="w-1/3 p-5 my-10 border-0 rounded-full bg-gray-400">
                <img src={BASE_URL+'/assets/img/ciomprix_logo.png'} className="w-full "/>
            </div>
            <span className="text-2xl">Stadistics</span>
            <hr className="w-2/3 border-gray-400 border-1 my-2"/>
            <div className="grid grid-cols-3 gap-16 w-2/3">
                <StatsCounter/>
                <StatsCounter/>
                <StatsCounter/>
            </div>
        </main>
        <AdmiMenu/>
        </>
    )
}


const StatsCounter = ({counts=45,title='Solutions',className}) => {
    return(
        <div className={`flex flex-col items-center h-auto w-full p-6 border-gray-500 border-2 rounded-xl ${className}`}>
            <span className="inline text-2xl openBold">{counts}</span>
            <span className="inline ml-2 text-lg text-gray-500 openMedium">{title}</span>
        </div>
    )
}

export default AdmiDashboard