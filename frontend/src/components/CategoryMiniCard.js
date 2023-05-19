import * as React from "react";
import * as General from "./general/GeneralModules";

const CategoryMiniCard = ({src,children}) => {
    return (
        <>
            <div className='bg-blue-900 w-64 rounded-xl p-5 mx-5'>
                <img src={src} className="w-20"/>
                <h3 className="pt-5 text-xl openMedium">
                    {children}
                </h3>
            </div>
        </>
    );
}
export default CategoryMiniCard