import { useState } from 'react';
import * as General from './general/GeneralModules';//Importacion de modulos generales

//Exportacion de iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'


const CategoryCarousel = ({children,title,listProps}) => {

    const [translate, setTranslate] = useState(0)
    const items=listProps.items.length

    //Funciones de movimiento
    const clickLeft = () => {
        if(translate<0) setTranslate(translate+1)
    }

    const clickRight = () => {
        setTranslate(translate-1)
    }

    return (
        <>
            <div className='w-full my-8 text-black'>
                <h3 className='text-2xl'>{'Nuestros '+title}</h3>
                <div className='flex flex-row justify-end flex-nowrap h-8 my-2'>
                    <button 
                        className='px-3 mr-2 rounded bg-gray-400 text-white transition-all active:bg-gray-300' 
                        onClick={clickLeft} 
                    >
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                    <button 
                        className='px-3 rounded bg-gray-400 text-white transition-all active:bg-gray-300' 
                        onClick={clickRight}
                    >
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>
                <hr className='border-black'/>
                <ul className={`grid grid-flow-col auto-cols-max gap-4 grap w-auto h-auto my-8 relative transition-[left] duration-300`} style={{left:`${translate*3*13}rem`}}>
                    <General.Cloner {...listProps /*Generador de contenido*/}>
                        {children}
                    </General.Cloner>
                </ul>
            </div>
        </>
    );
}
                    

export default CategoryCarousel