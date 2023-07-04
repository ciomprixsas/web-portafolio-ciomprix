import * as React from "react";
import * as General from "../../components/general/GeneralModules";
import ManagerCard from "../../components/ManagerCard";
import AdmiMenu from "./AdmiMenu";
import { usePageContext } from "../../contexts/page_context";
import { useParams } from "react-router-dom"

const CategoryForm = ({editor}) => {
    //Estados 
    //Datos de formulario
    const [activeS,setActiveS] = React.useState(false)
    const [description,setDescription] = React.useState()
    const [tittle,setTittle] = React.useState()

    const [error,setError] = React.useState(false)
    const [charged,setCharged] = React.useState(false)
    const [solution,setSolution] = React.useState()
    const [storages,setStorages] = React.useState()

    //Acceso al id especificado por url
    const {id} = useParams()

    //Funciones de acceso a la Api
    const {getCategory,solutions,getStoragesByCategory} = usePageContext()

    
    //Configuración de objetos para correcta configuración de componentes
    const setData = async() =>{
        let c = (await getCategory(id))[0]
        console.log(c)
        setTittle(c.tittle_c)
        setActiveS(Boolean(c.active_NoActive))
        setDescription(c.description_c)
        setSolution(c.id_s)
        let sto = await getStoragesByCategory(id)
        for(let s of sto){
            s.route = '/admin/storage_editor/'+s.id
        }
        setStorages(sto)
        setCharged(true)
    }

    if(editor && !charged){
        setData()
    }
    
    //Obtencion de datos desde formulario
    const handleSubmit= (e) =>{
        e.preventDefault()
        if(!tittle || !description || !solution){
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
            console.log(`${tittle},${r},${solution},${activeS},${description}`)
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
            <h1 className="text-center text-4xl">{(editor)?('Editor de categoría'):('Creador de categoría')}</h1>
            <hr className="border-black border-1 w-full my-5"/>
            <form className="grid grid-cols-3 grid-rows-4 gap-4 grid-rows-10 w-full"  onSubmit={handleSubmit}>
                <General.Input type={'selection'} options={optionsSolutions} name={'Solución'} id={'solution'} className={'col-start-2'} value={solution} setValue={setSolution}/>
                <General.Input type={'small_text'} name={'Titulo'} id={'tittle'} className={'col-start-2 row-start-2'} setValue={setTittle} value={tittle}/>
                <General.Input type={'active'} id={'active'} className={'flex flex-row items-center h-full col-start-3 row-start-2'} setValue={setActiveS} value={activeS}/>
                <General.Input type={'large-text'} name={'Descripción'} setValue={setDescription} className={'row-start-3 col-start-1 col-span-3 h-full'} value={description}/>
                <General.Input type={'submit'} className={'row-start-4 col-start-2'} name={(editor)?('Actualizar'):('Crear')}/>
            </form>
            {(editor && charged) &&
                <>
                <h2 className="w-full text-2xl text-center">Contenidos</h2>
                <hr className="w-full border-gray-400 border-1 my-2"/>
                <div className="grid grid-cols-3 p-4 gap-4">
                    <General.Cloner items={storages} rprops={[['title','tittle_sc'],['active','active_NoActive'],['key','id'],['href','route']]}>
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

export default CategoryForm


