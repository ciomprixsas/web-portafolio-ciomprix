import * as React from "react";
import * as General from "../../components/general/GeneralModules";

import { usePageContext } from '../../contexts/page_context'

import {AiOutlinePlusCircle} from 'react-icons/ai'
import AdmiMenu from "./AdmiMenu";
import ManagerCard from "../../components/ManagerCard";

const SolutionManager= () =>{
    const {solutions} = usePageContext()

    if(solutions){
    
    let localSolutions = solutions

    for(let s of localSolutions){
        s.route='/admin/solution_editor/'+s.id
    }

    return(
        <main className="relative top-28 px-20">
            <h1 className="text-center text-4xl">Administrador de soluciones</h1>
            <hr className="border-black border-1 w-full my-5"/>
            <div className="grid grid-cols-3 gap-6 w-full">
                <General.Cloner items={localSolutions} rprops={[['img','img_s'],['title','tittle_s'],['active','active_NoActive'],['key','id'],['href','route']]}>
                    <ManagerCard/>
                </General.Cloner>
                <General.Trigger className={'flex flex-col items-center justify-center w-full h-full bg-gray-800 text-white rounded-2xl'} href={'/admin/solution_creator'}>
                        <AiOutlinePlusCircle color="white" size={'100px'}/>
                        <div className="mt-5 text-2xl openMedium">Create Solution</div>
                </General.Trigger>
            </div>
            <AdmiMenu/>
        </main>
    )
    }
}

export default SolutionManager