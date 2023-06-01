import { useState,useRef, useEffect ,useCallback } from 'react';
import * as General from './general/GeneralModules';//Importacion de modulos generales
import SolutionCard from './SolutionCard';
import useScreenSize from '../hooks/useScreenSize';

//Exportacion de iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { usePageContext } from '../contexts/page_context';


const CategoryCarousel = ({title,id,jump,href}) => {
    const {width,heigth} = useScreenSize()

    const {getCategoriesBySolution} = usePageContext()

    const [widthItems,setWidthItems] = useState()
    const [translate, setTranslate] = useState(0)
    const [categories, setCategories] = useState()

    const settingCategories = useCallback((a) => setCategories(a))

    const widthUsableRef = useRef(null)

    let categoriesLength
    let lim
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
                setTranslate(translate + 1)
            }
            else if(touch.pageX>xInit && translate >0){
                setTranslate(translate - 1)
            }
        })
    }


    useEffect(()=>{
        if(widthItems!=widthUsableRef.current.offsetWidth)setWidthItems(Math.floor((widthUsableRef.current.offsetWidth-(16*(jump-1)))/jump))
        if(categories===undefined)getCategoriesBySolution(id,settingCategories)
        else{
            categoriesLength=categories.length
            lim=categoriesLength/jump-1
        }
    })
    
    return (
        <>
            <div className='w-full my-24 text-black' ref={widthUsableRef} id={href}>
                <h3 className='text-3xl lg:text-4xl'>{'Nuestros '+title}</h3>
                <div className={`flex flex-row flex-nowrap justify-end my-1 h-8`}
                    >
                    {(categoriesLength>jump || global.naveType === "computer"/*Identificador de dispositivo*/|| window.innerWidth > 800 ) &&
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
                {categories!=undefined &&
                <ul 
                    className={`grid grid-flow-col auto-cols-max gap-4 grap w-auto h-auto my-8 relative transition-[left] duration-700 lg:duration-[2s]`} 
                    style={{left:`${-translate*(widthItems+15)*jump}px`}}
                    onTouchMoveCapture={(e)=>handleTouchMove(e)}
                    onTouchStartCapture ={(e)=>handleTouchStart(e)}
                >
                    <General.Cloner items={Object.values(categories)} rprops={[['key','id_category'],['id','id_category'],['title','name_category']]}>
                        <SolutionCard className={`h-64`} width={widthItems} solutionHref={href}/>
                    </General.Cloner>
                
                </ul>}
            </div>
        </>
    );
}
                    

export default CategoryCarousel