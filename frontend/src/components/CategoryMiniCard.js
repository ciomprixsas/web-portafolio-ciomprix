import * as React from 'react';
import * as General from "./general/GeneralModules";

const CategoryMiniCard = ({src,children,href}) => {
    return (
        <>
            <General.Trigger href={'#'+href}>
                <div className='w-full h-full  p-4 rounded-xl bg-blue-900 lg:p-5'>
                    <img src={src} className='w-1/2 lg:w-5/12'/>
                    <h3 className='w-4/5 mt-2 text-left text-xl openMedium lg:text-2xl'>
                        {children}
                    </h3>
                </div>
            </General.Trigger>
        </>
    );
}
export default CategoryMiniCard