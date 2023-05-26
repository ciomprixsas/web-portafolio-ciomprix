import * as React from "react";
import * as General from "./general/GeneralModules";
import SectionCard from "./SectionCard";

const SectionGrid = ({children,listProps,className}) => {
    return (
        <>
            <div className={className}>
                <h3 className="text-2xl w-auto-min my-5">Learning Analytics</h3>
                <hr className="border-black"/>
                <div className="grid grid-cols-3 gap-3 mt-6">
                    <General.Cloner {...listProps}>
                        {children}
                    </General.Cloner>
                </div>
            </div>
        </>
    );
}
    export default SectionGrid