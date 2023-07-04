import * as React from 'react';
import * as General from "./general/GeneralModules";

/*____________________________________________________
PROPS
src: Url para definir el icono de la tajeta
children: String que define el texto contenido en la tarjeta
href: Url para definir el redireccionamiento al interactuar con la tarjeta
________________________________________________________________*/
const SolutionMiniCard = ({src,children,href}) => {
    return (
        <>
            <General.Trigger hrefl={href} className={'cursor-pointer'}>
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