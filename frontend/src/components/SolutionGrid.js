import * as React from 'react';
import * as General from './general/GeneralModules';

const SolutionGrid = ({children,listProps,className}) => {
    return (
        <>
            <div className={className}>
                <h3 className='my-5 text-4xl'>Learning Analytics</h3>
                <hr className='border-black border-[1px]'/>
                <div className='grid grid-cols-3 gap-3 mt-6'>
                    <General.Cloner {...listProps}>
                        {children}
                    </General.Cloner>
                </div>
            </div>
        </>
    );
}
export default SolutionGrid