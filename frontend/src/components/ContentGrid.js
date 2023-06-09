import { useState } from "react";

//Importacion de componentes
import * as General from './general/GeneralModules';
import InteractiveCard from "./InteractiveCard";
import useScreenSize from '../hooks/useScreenSize'

const ContentGrid = ({className,storage,title}) => {

    const {width} = useScreenSize()

    return (
        <>
            <div className={className} >
                <h3 className='lg:my-5 text-3xl w-1/3 my-4 text-black lg:text-4xl lg:w-full'>{title}</h3>
                <hr className='border-black border-[1px]'/>
                <div className='grid gap-3 grid-cols-1 lg:grid-cols-2 mt-6'>
                    <General.Cloner items={storage} rprops={[['key','id_sc'],['id','id_sc'],['title','name_sc']]}>
                        <InteractiveCard className={`h-96`}/>
                    </General.Cloner>
                </div>
            </div>
        </>
    );
}
export default ContentGrid