import * as React from 'react';
import * as General from './general/GeneralModules';

const SolutionCard = ({title,src,className}) => {
    return (
        <>
            <General.BgImage className={`inline-block bg-center bg-resize bg-no-repeat bg-gray-300 rounded-3xl text-white ${className}`} src={src}>
                <div className='w-full h-full relative opacity-0 transition-all duration-300 hover:opacity-100'>
                    <div className='flex flex-col items-center justify-end h-1/2 w-full absolute bottom-0 rounded-3xl bg-gradient-to-t from-black to-transparent '>
                        <h4 className='openBold text-xl mb-10'>{title}</h4>
                        <General.Link className='w-24 py-1 mb-8 bg-blue-500 px-6 rounded-full text-l text-center openMedium transition-all duration-200 hover:scale-110 active:scale-90 '>Ir</General.Link>
                    </div>
                </div>
            </General.BgImage>
        </>
    );
}

export default SolutionCard