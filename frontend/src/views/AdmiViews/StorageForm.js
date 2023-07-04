import * as React from "react";
import * as General from "../../components/general/GeneralModules";
import AdmiMenu from "./AdmiMenu";
import { usePageContext } from "../../contexts/page_context";
import { useParams } from "react-router-dom"

const StorageForm = ({editor}) => {

    //Estados
    //Estados de información de formulario 
    const [activeS,setActiveS] = React.useState(false)
    const [name,setName] = React.useState()
    const [description,setDescription] = React.useState()
    const [tittle,setTittle] = React.useState()

    //Estado de error en el formulario
    const [error,setError] = React.useState(false)
    const [charged,setCharged] = React.useState(false)
    const [categories,setCategories] = React.useState()
    const [category,setCategory] = React.useState()
    const [solution,setSolution] = React.useState()

    //Acceso al id especificado por url
    const {id} = useParams()
    
    //Funciones para acceso a api
    const {getCategory,solutions,getSolution,getCategoriesBySolution,getStorage} = usePageContext()
    
    
    //Configuracion de lista desplegable de soluciones
    const changeSolution = async(id) =>{
        let cat=await getCategoriesBySolution(id)
        for(let c of cat){
            c.name=c.tittle_c
        }
        setCategories(cat)
    }
    
     //Configuración de objetos para correcta configuración de componentes
    const setData = async() =>{
        let s = (await getStorage(id))
        let c =(await getCategory(s.id_c))[0]
        setSolution((await getSolution(c.id_s)).id)
        changeSolution(c.id_s)
        setCategory(c.id)
        setTittle(s.tittle_sc)
        setActiveS(Boolean(s.active_NoActive))
        setDescription(s.description_sc)
        setCharged(true)
    }

    if(editor && !charged){
        setData()
    }
    
    //Obtención de información de formularios
    const handleSubmit= (e) =>{
        e.preventDefault()
        if(!tittle||!name || !description || !category){
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
            console.log(`${name},${tittle},${r},${category},${activeS},${description}`)
            window.history.back()
        }
    }
    
    let optionsSolutions
    if(solutions) optionsSolutions=solutions

    for(let s of optionsSolutions){
        s.name = s.tittle_s
    }

    return (
        <>
        <main className="relative top-36 px-20">
            <h1 className="text-center text-4xl">{(editor)?('Editor de contenido'):('Creador de contenido')}</h1>
            <hr className="border-black border-1 w-full my-5"/>
            <form className="grid grid-cols-3 grid-rows-4 gap-4 grid-rows-10 w-full"  onSubmit={handleSubmit}>
                {/*
                    <General.Input type={'file-img'} name={'Icono'} id={'icon'} className={'relative w-full h-auto col-start-1'}/>
                    <General.Input type={'file-img'} name={'Banner'} id={'banner'} className={'relative w-full h-auto'}/>
                */}
                <div className="grid grid-cols-2 gap-5 col-span-3">
                    <General.Input type={'selection'} options={optionsSolutions} name={'Solution:'} setValue={changeSolution} value={solution}/>
                    <General.Input type={'selection'} options={categories} name={'Categoria:'} setValue={setCategory} value={category}/>
                </div>
                <General.Input type={'small_text'} name={'Nombre'} id={'name'} className={'col-start-1 row-start-2'} setValue={setName} value={name}/>
                <General.Input type={'small_text'} name={'Titulo'} id={'tittle'} className={'col-start-2 row-start-2'} setValue={setTittle} value={tittle}/>
                <General.Input type={'active'} id={'active'} className={'flex flex-row items-center h-full col-start-3 row-start-2'} setValue={setActiveS} value={activeS}/>
                <General.Input type={'large-text'} name={'Descripcion'} setValue={setDescription} className={'row-start-3 col-start-1 col-span-3 h-full'} value={description}/>
                <General.Input type={'submit'} className={'row-start-4 col-start-2'} name={(editor)?('Actualizar'):('Crear')}/>
            </form>
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

export default StorageForm


