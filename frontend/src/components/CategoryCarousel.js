import { useState,useRef, useEffect } from 'react';
import * as General from './general/GeneralModules';//Importacion de modulos generales
import SolutionCard from './SolutionCard';

//Exportacion de iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'


const CategoryCarousel = ({title,solutions,jump}) => {
    const [translate, setTranslate] = useState(0)
    //const [widthItems,setWidthItems] = useState(0)

    const widthRef = useRef(null)
    let widthItems


    const lim=solutions.length/jump-1
    let xInit

    //Funciones de movimiento
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

    //Controles touch
    const handleTouchStart = (e) =>{
        [...e.changedTouches].map(touch=>{
            xInit=touch.pageX
        })
    }

    const handleTouchMove = (e) => {
        [...e.changedTouches].map(touch=>{
            if(touch.pageX<xInit && translate < lim){
                setTranslate(translate + (0.5))
            }
            else if(touch.pageX>xInit && translate >0){
                setTranslate(translate - (0.5))
            }
        })
    }


    useEffect(()=>{
        if(widthRef.current!=undefined) {
            widthItems=(Math.floor((widthRef.current.offsetWidth-(16*3))/3))
            console.log(widthItems)
        }
    })
    
    return (
        <>
            <div className='w-full my-24 text-black' ref={widthRef}>
                <h3 className='text-3xl lg:text-4xl'>{'Nuestros '+title}</h3>
                <div className='flex flex-row flex-nowrap justify-end h-0 my-1 lg:h-8' 
                    >
                    {(solutions.length>4 || global.naveType === "computer"/*Identificador de dispositivo*/)&&
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
                    className={`grid grid-flow-col auto-cols-max gap-4 grap w-auto h-auto my-8 relative transition-[left] duration-700 lg:duration-[2s]`} 
                    style={{left:`${-translate*(widthItems+15)*jump}px`}}
                    onTouchMoveCapture={(e)=>handleTouchMove(e)}
                    onTouchStartCapture ={(e)=>handleTouchStart(e)}
                >
                    <General.Cloner items={solutions} rprops={[['title','title'],['key','id']]}>
                        <SolutionCard src='/assets/img/imagedefaul.png' className={`w-[${widthItems}] h-[600px] lg:h-96`}/>
                    </General.Cloner>
                </ul>
            </div>
        </>
    );
}
                    

export default CategoryCarousel