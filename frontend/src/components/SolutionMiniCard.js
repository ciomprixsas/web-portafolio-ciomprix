import * as React from 'react';
import * as General from "./general/GeneralModules";

const SolutionMiniCard = ({src,children,href}) => {
    return (
        <>
            <General.Trigger hrefl={href}>
                <div className='w-full h-full  p-4 rounded-xl bg-blue-900 lg:p-5'>
                    <img src={src} className='w-2/5 lg:w-1/3'/>
                    <h3 className='w-full mt-2 text-left text-xl openMedium lg:text-2xl'>
                        {children}
                    </h3>
                </div>
            </General.Trigger>
        </>
    );
}
export default SolutionMiniCard