import * as React from 'react';
import * as General from "./general/GeneralModules";

const CategoryMiniCard = ({src,children}) => {
    return (
        <>
            <General.Link mode="literal">
                <div className='w-64 p-5 rounded-xl bg-blue-900 h-full'>
                    <img src={src} className='w-20'/>
                    <h3 className='w-2/3 pt-5 text-2xl openMedium'>
                        {children}
                    </h3>
                </div>
            </General.Link>
        </>
    );
}
export default CategoryMiniCard