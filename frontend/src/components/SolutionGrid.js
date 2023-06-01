import { useRef,useEffect } from "react";

//Importacion de componentes
import * as General from './general/GeneralModules';
import SolutionCard from "../components/SolutionCard";

const SolutionGrid = ({items,className}) => {

    return (
        <>
            <div className={className} >
                <h3 className='lg:my-5 text-3xl w-1/3 my-4 lg:text-4xl lg:w-full'>Learning Analytics</h3>
                <hr className='border-black border-[1px]'/>
                <div className='grid grid-cols-3 gap-3 mt-6'>
                    <General.Cloner items={items} rprops={[['key','id_category'],['id','id_category'],['title','name_category']]}>
                        <SolutionCard className={`h-64`}/>
                    </General.Cloner>
                </div>
            </div>
        </>
    );
}
export default SolutionGrid