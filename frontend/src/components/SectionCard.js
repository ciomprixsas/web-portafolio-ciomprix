import * as React from "react";
import * as General from "./general/GeneralModules";

const SectionCard = ({title,src,props}) => {
    return (
        <>
            <General.BgImage props={{className:"w-48 h-64 bg-center bg-resize bg-no-repeat bg-gray-300 rounded-xl",...props}} src={src}>
                <div className="w-full h-full relative section">
                    <div className="h-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-t from-black to-transparent absolute bottom-0 rounded-xl ">
                        <h4 className="openBold text-l">{title}</h4>
                        <button className="bg-teal-500 px-6 rounded-xl text-l openMedium mt-6">Ir</button>
                    </div>
                </div>
            </General.BgImage>
        </>
    );
}

export default SectionCard