import * as React from 'react';


/*____________________________________________________
PROPS
children: Componentes internos a <Modal> queseran mostrados
state: Booleano de un hook useState para definir si se muestra(true) o se oculta(false)
setState: Funcion de asignacion de un hook useState para cerrar el modal
title: String define el titulo del modal

________________________________________________________________*/

const Modal = ({children,state,setState,className,title='Video'}) => {

    return (
        <>
            {state &&
            <div className='flex justify-center items-center h-screen w-screen z-50 fixed top-0 left-0 bg-black bg-opacity-75 '>
                <div className={`h-auto text-white ${className}`}>
                    <h3 className='openBold'>
                        {title}
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