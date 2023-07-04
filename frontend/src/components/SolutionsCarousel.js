import { useState,useRef,useEffect} from 'react';
import * as General from './general/GeneralModules';//Importacion de modulos generales
import InteractiveCard from './InteractiveCard';
import useScreenSize from '../hooks/useScreenSize';

//Exportacion de iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'


const SolutionsCarousel = ({title,element,href}) => {
    const {width} = useScreenSize()

    //Define el ancho de los elementos contenidos
    const [widthItems,setWidthItems] = useState()

    //Identifica el elemento que se esta mostrando
    const [item, setItem] = useState(0)
    
    //Limitante de movimiento
    const [lim,setLim] = useState()

    //Obtine el ancho de la grid que contiene los elementos del carusel
    const widthUsableRef = useRef(null)

    //if(element!=undefined)console.log(element.length)
    let jump
    let xInit,yInit

    //Funciones de movimiento
    const clickLeft = () => {
        if(item>0){ 
            if(item<1)setItem(0)
            else setItem(item-1)
        }
    }

    const clickRight = () => {
        if(lim-item<1)setItem(item+(lim-item))
        else setItem(item+1)
    }

    //Controles touch
    const handleTouchStart = (e) =>{
        [...e.changedTouches].map(touch=>{
            xInit=touch.pageX
            yInit=touch.pageY
        })
    }

    const handleTouchMove = (e) => {
        [...e.changedTouches].map(touch=>{
            if(touch.pageY < yInit+10 && touch.pageY > yInit-10){
                if(touch.pageX<(xInit-50) && item < lim){
                    if(lim-item<1)setItem(item+(lim-item))
                    else setItem(item+1)
                }
                else if(touch.pageX>(xInit+50) && item >0){
                    if(item<1)setItem(0)
                    else setItem(item-1)
                }
            }
        })
    }

    //Calibracion responsivo
    if(width<640 && jump!=1)jump=1
    else if(width<768 && jump!=1)jump=(2)
    else if(width<1024 && jump!=1)jump=(3)
    else if(jump!=4)jump=(4)

    useEffect(()=>{
        if(widthUsableRef.current)setWidthItems(((widthUsableRef.current.offsetWidth-(16*(jump-1)))/jump))
        if(element!=undefined){
            setLim((element.length-jump>0)?element.length-jump:0) 
        }
    })

    useEffect(()=>{
        setItem((item>0)&&item-1)
    },[jump])

    if(!element) return null

    
    return (
        <>
            <div className='w-full my-24 text-black' ref={widthUsableRef} id={href}>
                <h3 className='text-3xl lg:text-4xl'>{title}</h3>
                {(element.length>jump && global.naveType === "computer"/*Identificador de dispositivo*/) &&
                <div className={`flex flex-row flex-nowrap justify-end my-1 h-8`}
                    >
                    
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
                </div>
                }
                <hr className='border-black my-4'/>
                {widthUsableRef.current!=undefined &&
                <ul 
                    className={`grid grid-flow-col gap-[16px] grap w-full h-auto relative transition-[left] duration-700 lg:duration-[2s]`} 
                    style={{left:`${-item*((widthItems+16))}px`,gridTemplateColumns:`repeat(${element.length},${widthItems}px)`}}
                    onTouchMoveCapture={(e)=>handleTouchMove(e)}
                    onTouchStartCapture ={(e)=>handleTouchStart(e)}
                >
                    <General.Cloner items={Object.values(element)} rprops={[['key','id'],['id','id'],['title','tittle_c'],['href','route'],['src','img_c']]}>
                        <InteractiveCard className={`h-[400px]`}/>
                    </General.Cloner>
                </ul>
                }
            </div>
        </>
    );
}
                    

export default SolutionsCarousel