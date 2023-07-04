import * as React from "react";

//Importacion ded componentes
import * as General from "../../components/general/GeneralModules";
import AdmiMenu from "./AdmiMenu";
import ManagerCard from "../../components/ManagerCard";

import { usePageContext } from '../../contexts/page_context'

import {AiOutlinePlusCircle} from 'react-icons/ai'

const StorageManager= () =>{
    //Funciones para acceso a Api
    const {getCategoriesBySolution,solutions,getStoragesByCategory} = usePageContext()
    
    //Estados 
    const [categories,setCategories] = React.useState()
    const [storages,setStorages] = React.useState()

    //Configuración de lista desplegable de soluciones
    const changeSolution = async(id) =>{
        let cat=await getCategoriesBySolution(id)
        for(let c of cat){
            c.name=c.tittle_c
        }
        setCategories(cat)
    }
    
    //Configuración de lista desplegable de soluciones
    const changeCategory = async(id) =>{
        let sto=await getStoragesByCategory(id)
        for(let s of sto){
            s.route='/admin/storage_editor/'+s.id
        }
        setStorages(sto)
    }

    if(solutions){
        
        let optionsSolutions = solutions

        for(let s of optionsSolutions){
            s.name=s.tittle_s
        }

        return(
            <main className="relative top-28 px-20">
                <h1 className="text-center text-4xl">Administrador de contenidos</h1>
                <hr className="border-black border-1 w-full my-5"/>
                <div className="grid grid-cols-2 gap-5">
                    <General.Input type={'selection'} options={optionsSolutions} name={'Solution:'} setValue={changeSolution}/>
                    <General.Input type={'selection'} options={categories} name={'Categoria:'} setValue={changeCategory }/>
                </div>
                {(storages)&&
                <div className="grid grid-cols-3 gap-6 w-full mt-10">
                    <General.Cloner items={storages} rprops={[['title','tittle_sc'],['active','active_NoActive'],['key','id'],['href','route']]}>
                        <ManagerCard/>
                    </General.Cloner>
                    <General.Trigger className={'flex flex-col items-center justify-center w-full h-full bg-gray-800 text-white rounded-2xl p-5'} href={'/admin/category_creator'}>
                            <AiOutlinePlusCircle color="white" size={'50px'}/>
                            <div className="mt-5 text-2xl openMedium">Crear elemento</div>
                    </General.Trigger>
                </div>}
                <AdmiMenu/>
            </main>
        )
    }
}

export default StorageManager