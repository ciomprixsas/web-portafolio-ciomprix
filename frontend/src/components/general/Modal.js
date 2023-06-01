import * as React from 'react';


const Modal = ({children,state,setState,className}) => {

    return (
        <>
            {state &&
            <div className='flex justify-center items-center h-screen w-screen z-50 fixed top-0 left-0 bg-black bg-opacity-75 '>
                <div className={`h-auto text-white ${className}`}>
                    <h3 className='openBold'>
                        Video
                    <button 
                        className='float-right border-2 rounded-full px-2 openMedium border-white transition-all active:bg-white active:bg-opacity-50 ' 
                        onClick={()=>setState(false)}>
                        Cerrar
                    </button>
                    </h3>
                    {children}
                </div>
            </div>}
        </>
    );
}
    export default Modal