import * as React from "react";
import * as General from "./general/GeneralModules";

const CategoryMiniCard = ({src,title}) => {
    return (
        <>
            <div className='bg-blue-900 w-64 h-48 rounded-xl p-5'>
                <img src={src} className="w-24"/>
                <h3 className="pt-5 text-xl openMedium">
                    {title}
                </h3>
            </div>
        </>
    );
}
export default CategoryMiniCard