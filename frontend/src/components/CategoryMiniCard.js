import * as React from 'react';
import * as General from "./general/GeneralModules";

const CategoryMiniCard = ({src,children}) => {
    return (
        <>
            <General.Link mode="literal">
                <div className='w-full h-full  p-4 rounded-xl bg-blue-900 lg:p-5'>
                    <img src={src} className='w-1/2 lg:w-5/12'/>
                    <h3 className='w-4/5 mt-2 text-xl openMedium lg:text-2xl lg:w-2/3'>
                        {children}
                    </h3>
                </div>
            </General.Link>
        </>
    );
}
export default CategoryMiniCard