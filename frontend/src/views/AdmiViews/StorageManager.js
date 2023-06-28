import * as React from "react";
import * as General from "../../components/general/GeneralModules";

import { usePageContext } from '../../contexts/page_context'

import {AiOutlinePlusCircle} from 'react-icons/ai'
import AdmiMenu from "./AdmiMenu";
import ManagerCard from "../../components/ManagerCard";

const StorageManager= () =>{
    const {getCategoriesBySolution,solutions,getStoragesByCategory} = usePageContext()

    const [categories,setCategories] = React.useState()
    const [storages,setStorages] = React.useState()

    const changeSolution = async(id) =>{
        let cat=await getCategoriesBySolution(id)
        for(let c of cat){
            c.name=c.name_c
        }
        setCategories(cat)
    }
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
            s.name=s.name_s
        }

        return(
            <main className="relative top-28 px-20">
                <h1 className="text-center text-4xl">Administrador de categorias</h1>
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