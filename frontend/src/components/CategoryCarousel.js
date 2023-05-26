import { useState } from "react";
import * as General from "./general/GeneralModules";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons"

const CategoryCarousel = ({children,props,title,listProps,wItems}) => {

    const [translate, setTranslate] = useState(0)
    const items=listProps.items.length

    //console.log(children.props)

    const clickLeft = () => {
        if(translate<0) setTranslate(translate+1)
    }
    const clickRight = () => {
        setTranslate(translate-1)
    }
//transform:`translate ${translate*48}`
    return (
        <>
            <div className='text-black w-full my-8'>
                <h3 className="text-2xl w-auto-min">{"Nuestros "+title}</h3>
                <div className="flex flex-row flex-nowrap h-8 justify-end my-2">
                    <button className="bg-gray-400 px-3 rounded text-white mr-2 active:bg-gray-300 transition-all" onClick={clickLeft} ><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button className="bg-gray-400 px-3 rounded text-white active:bg-gray-300 transition-all" onClick={clickRight}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
                <hr className="border-black"/>
                <ul className={`my-8 w-auto h-auto grid grid-flow-col auto-cols-max gap-4 grap relative carrousel`} style={{left:`${translate*3*13}rem`}}>
                    <General.Cloner {...listProps}>
                        {children}
                    </General.Cloner>
                </ul>
            </div>
        </>
    );
}
                    

export default CategoryCarousel