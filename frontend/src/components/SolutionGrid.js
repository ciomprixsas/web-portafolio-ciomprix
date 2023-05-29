import { useRef,useEffect } from "react";

//Importacion de componentes
import * as General from './general/GeneralModules';
import SolutionCard from "../components/SolutionCard";

const SolutionGrid = ({children,items,className}) => {
    const widthRef = useRef(null)
    let widthItems

    useEffect(()=>{
        if(widthRef.current!=undefined)widthItems=(Math.floor((widthRef.current.offsetWidth-(16*3))/3))
    })
    
    return (
        <>
            <div className={className} ref={widthRef}>
                <h3 className='lg:my-5 text-3xl w-1/3 my-4 lg:text-4xl lg:w-full'>Learning Analytics</h3>
                <hr className='border-black border-[1px]'/>
                <div className='grid grid-cols-3 gap-3 mt-6'>
                    <General.Cloner items={items} rprops={[["title","title"],["key","title"]]}>
                        <SolutionCard src="/assets/img/imagedefaul.png" className={`w-[${widthItems}] h-64`}/>
                    </General.Cloner>
                </div>
            </div>
        </>
    );
}
export default SolutionGrid