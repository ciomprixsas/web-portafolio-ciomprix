import * as React from "react";
import * as General from "../../components/general/GeneralModules";

import { usePageContext } from '../../contexts/page_context'

import {AiOutlinePlusCircle} from 'react-icons/ai'
import AdmiMenu from "./AdmiMenu";
import ManagerCard from "../../components/ManagerCard";

const CategoryManager= () =>{
    //Funciones para acceso a api
    const {getCategoriesBySolution,solutions} = usePageContext()

    //Estado
    const [categories,setCategories] = React.useState()

    //Cambio de solucion seleccionada
    const changeSolution = async(id) =>{
        let cat=await getCategoriesBySolution(id)
        for(let c of cat){
            c.route='/admin/category_editor/'+c.id
        }
        setCategories(cat)
    }
    
    console.log(categories)

    if(solutions){
        
        let options = solutions

        for(let s of options){
            s.name=s.tittle_s
        }

        return(
            <main className="relative top-28 px-20 flex items-center flex-col">
                <h1 className="text-center text-4xl">Administrador de categorías</h1>
                <hr className="border-black border-1 w-full my-5"/>
                <General.Input type={'selection'} options={options} name={'Solution:'} setValue={changeSolution}/>
                {(categories)&&
                <div className="grid grid-cols-3 gap-6 w-full mt-10">
                    <General.Cloner items={categories} rprops={[['title','tittle_c'],['active','active_NoActive'],['key','id'],['href','route']]}>
                        <ManagerCard/>
                    </General.Cloner>
                    <General.Trigger className={'flex flex-col items-center justify-center w-full h-full bg-gray-800 text-white rounded-2xl p-5'} href={'/admin/category_creator'}>
                            <AiOutlinePlusCircle color="white" size={'50px'}/>
                            <div className="mt-5 text-2xl openMedium">Crear categoría</div>
                    </General.Trigger>
                </div>}
                <AdmiMenu/>
            </main>
        )
    }
}

export default CategoryManager