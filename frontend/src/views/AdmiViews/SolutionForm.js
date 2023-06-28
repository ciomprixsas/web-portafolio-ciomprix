import * as React from "react";
import * as General from "../../components/general/GeneralModules";
import ManagerCard from "../../components/ManagerCard";
import AdmiMenu from "./AdmiMenu";
import { useNavigate } from "react-router-dom";
import { usePageContext } from "../../contexts/page_context";
import { useParams } from "react-router-dom"

const SolutionForm = ({editor}) => {
    const [activeS,setActiveS] = React.useState(false)
    const [name,setName] = React.useState()
    const [description,setDescription] = React.useState()
    const [tittle,setTittle] = React.useState()
    const [error,setError] = React.useState(false)
    const [charged,setCharged] = React.useState(false)
    const [categories,setCategories] = React.useState()

    const {id} = useParams()

    const {getSolution,getCategoriesBySolution} = usePageContext()


    const setData = async() =>{
        let s = await getSolution(id)
        setName(s.name_s)
        setTittle(s.tittle_s)
        setActiveS(Boolean(s.active_NoActive))
        setDescription(s.description_s)
        let cat = await getCategoriesBySolution(id)
        for(let c of cat){
            c.route = '/admin/category_editor/'+c.id
        }
        setCategories(cat)
        setCharged(true)
    }

    if(editor && !charged){
        setData()
    }
    
    const navigate = useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault()
        if(!tittle||!name || !description){
            setError(true)
        }
        else{
            let r = tittle
            let ctrl = 0
            while(r.includes(' ')){
                r=r.replace(' ','_').toLowerCase()
                ctrl++
                if(ctrl>20){
                    console.log('Roto')
                    break
                }
            }
            console.log(`${name},${tittle},${r},${activeS},${description}`)
            navigate('/admin/solution_manager')
        }
    }

    
    let options = [
        {name:'Option 1',id:'1'},
        {name:'Option 2',id:'2'},
        {name:'Option 3',id:'3'},
        {name:'Option 4',id:'4'}
    ]
    return (
        <>
        <main className="relative top-36 px-20">
            <h1 className="text-center text-4xl">{(editor)?('Editor de solucion'):('Creador de solucion')}</h1>
            <hr className="border-black border-1 w-full my-5"/>
            <form className="grid grid-cols-3 grid-rows-3 gap-4 grid-rows-10 w-full"  onSubmit={handleSubmit}>
                {/*
                    <General.Input type={'file-img'} name={'Icono'} id={'icon'} className={'relative w-full h-auto col-start-1'}/>
                    <General.Input type={'file-img'} name={'Banner'} id={'banner'} className={'relative w-full h-auto'}/>
                */}
                <General.Input type={'small_text'} name={'Nombre'} id={'name'} className={'col-start-1'} setValue={setName} value={name}/>
                <General.Input type={'small_text'} name={'Titulo'} id={'tittle'} className={'col-start-2'} setValue={setTittle} value={tittle}/>
                <General.Input type={'active'} id={'active'} className={'flex flex-row items-center h-full col-start-3'} setValue={setActiveS} value={activeS}/>
                <General.Input type={'large-text'} name={'Descripcion'} setValue={setDescription} className={'row-start-2 col-start-1 col-span-3 h-full'} value={description}/>
                <General.Input type={'submit'} className={'row-start-3 col-start-2'} name={(editor)?('Actualizar'):('Crear')}/>
            </form>
            {(editor && charged) &&
                <>
                <h2 className="w-full text-2xl text-center">Categorias</h2>
                <hr className="w-full border-gray-400 border-1 my-2"/>
                <div className="grid grid-cols-3 p-4 gap-4">
                    <General.Cloner items={categories} rprops={[['title','tittle_c'],['active','active_NoActive'],['key','id'],['href','route']]}>
                        <ManagerCard/>
                    </General.Cloner>
                </div>
                </>
            }
        </main>
        <AdmiMenu/>
        <General.Modal state={error} setState={setError}> 
            <div className="flex items-center justify-center w-[400px] h-48 bg-white text-black">
                <span>Algo salio mal, intenta de nuevo</span>
            </div>
        </General.Modal>
        </>
    );
}

export default SolutionForm


