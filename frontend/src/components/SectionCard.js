import * as React from "react";
import * as General from "./general/GeneralModules";

const SectionCard = ({title,src,className}) => {
    return (
        <>
            <General.BgImage className={`h-64 bg-center bg-resize bg-no-repeat bg-gray-300 rounded-xl text-white ${className}`} src={src}>
                <div className="w-full h-full relative section">
                    <div className="h-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-t from-black to-transparent absolute bottom-0 rounded-xl ">
                        <h4 className="openBold text-l">{title}</h4>
                        <General.Link className="bg-teal-500 px-6 rounded-xl text-l openMedium mt-6 transition-all duration-200 hover:scale-110 active:scale-90 ">Ir</General.Link>
                    </div>
                </div>
            </General.BgImage>
        </>
    );
}

export default SectionCard