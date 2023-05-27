import { useState } from 'react';
import * as General from './general/GeneralModules';//Importacion de modulos generales
import SolutionCard from './SolutionCard';

//Exportacion de iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'


const CategoryCarousel = ({title,solutions}) => {

    const [translate, setTranslate] = useState(0)
    const lim=solutions.length/4-1

    //Funciones de movimiento
    console.log(translate)

    const clickLeft = () => {
        if(translate>0){ 
            if(translate<1)setTranslate(0)
            else setTranslate(translate-1)
        }
    }

    const clickRight = () => {
        if(lim-translate<1)setTranslate(translate+(lim-translate))
        else setTranslate(translate+1)
        
    }

    return (
        <>
            <div className='w-full my-24 text-black'>
                <h3 className='text-4xl'>{'Nuestros '+title}</h3>
                <div className='flex flex-row flex-nowrap justify-end h-8 my-1'>
                    {(solutions.length>4)&&
                    <>
                    <button 
                        className='px-3 mr-2 rounded bg-gray-500 text-white transition-all active:bg-gray-400' 
                        onClick={clickLeft} 
                    >
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                    <button 
                        className='px-3 rounded bg-gray-500 text-white transition-all active:bg-gray-400' 
                        onClick={clickRight}
                    >
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                    </>
                    }
                </div>
                <hr className='border-black'/>
                <ul 
                    className={`grid grid-flow-col auto-cols-max gap-4 grap w-auto h-auto my-8 relative transition-[left] duration-[2s]`} 
                    style={{left:`${-translate*4*265}px`}}
                >
                    <General.Cloner items={solutions} rprops={[['title','title'],['key','id']]}>
                        <SolutionCard src='/assets/img/imagedefaul.png' className='w-[250px] h-96'/>
                    </General.Cloner>
                </ul>
            </div>
        </>
    );
}
                    

export default CategoryCarousel