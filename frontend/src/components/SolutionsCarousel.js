import { useState,useRef, useEffect ,useCallback, useDebugValue } from 'react';
import * as General from './general/GeneralModules';//Importacion de modulos generales
import InteractiveCard from './InteractiveCard';
import useScreenSize from '../hooks/useScreenSize';

//Exportacion de iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { usePageContext } from '../contexts/page_context';


const SolutionsCarousel = ({title,id,href}) => {
    const {width} = useScreenSize()

    const {getSolution,getCategories} = usePageContext()

    window.onload = () => {
        console.log('cargando')
    }

    const [widthItems,setWidthItems] = useState()
    const [item, setItem] = useState(0)
    const [categories,setCategories] = useState(undefined)
    
   // const [jump,jump=] = useState(1)
    const [lim,setLim] = useState()

    const setData = async() => {
        let a=await getCategories(id)
        for(let b of a){
        b.route = (await getSolution(b.id_solution)).name_solution+'/'+b.id_category
        }
        setCategories(a)
    }

    if(categories===undefined)setData()


    const widthUsableRef = useRef(null)

    //if(categories!=undefined)console.log(categories.length)
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

    if(width<640 && jump!=1)jump=1
    else if(width<768 && jump!=1)jump=(2)
    else if(width<1024 && jump!=1)jump=(3)
    else if(jump!=4)jump=(4)

    useEffect(()=>{
        if(widthUsableRef.current)setWidthItems(((widthUsableRef.current.offsetWidth-(16*(jump-1)))/jump))
        if(categories!=undefined){
        setLim(categories.length-jump) 
        }
    })

    useEffect(()=>{
        if(item>=lim){
            setItem(item-1)
        }
    },[jump])

    if(!categories) return null

    return (
        <>
            <div className='w-full my-24 text-black' ref={widthUsableRef} id={href}>
                <h3 className='text-3xl lg:text-4xl'>{title}</h3>
                {(categories.length>jump && global.naveType === "computer"/*Identificador de dispositivo*/) &&
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
                    style={{left:`${-item*((widthItems+16))}px`,gridTemplateColumns:`repeat(${categories.length},${widthItems}px)`}}
                    onTouchMoveCapture={(e)=>handleTouchMove(e)}
                    onTouchStartCapture ={(e)=>handleTouchStart(e)}
                >
                    <General.Cloner items={Object.values(categories)} rprops={[['key','id_category'],['id','id_category'],['title','name_category'],['href','route']]}>
                        <InteractiveCard className={`h-[400px]`}/>
                    </General.Cloner>
                </ul>
                }
            </div>
        </>
    );
}
                    

export default SolutionsCarousel