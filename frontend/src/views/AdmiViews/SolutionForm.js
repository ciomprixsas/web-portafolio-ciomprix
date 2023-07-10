import * as React from "react";
import * as General from "../../components/general/GeneralModules";
import ManagerCard from "../../components/ManagerCard";
import AdmiMenu from "./AdmiMenu";
import { useNavigate } from "react-router-dom";
import { usePageContext } from "../../contexts/page_context";
import { useParams } from "react-router-dom"

const SolutionForm = ({editor}) => {
    //Estados 
    //Estados de formulario
    const [activeS,setActiveS] = React.useState(false)
    const [description,setDescription] = React.useState()
    const [tittle,setTittle] = React.useState()

    
    const [error,setError] = React.useState(false)//Estado de error del formulario
    
    const [charged,setCharged] = React.useState(false)
    const [categories,setCategories] = React.useState()

    
    //Acceso al id especificado por url
    const {id} = useParams()

    //Funciones para acceso a api
    const {getSolution,getCategoriesBySolution,createSolution} = usePageContext()

    //Configuración de objetos para correcta configuración de componentes
    const setData = async() =>{
        let s = await getSolution(id)
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

    // Obtención de datos desde formulario
    const handleSubmit= (e) =>{
        let dateUpdate = Date.now()
        let dateCreated
        e.preventDefault()
        if(!tittle|| !description){
            setError(true)
        }
        else{
            let route = tittle
            let ctrl = 0
            while(route.includes(' ')){
                route=route.replace(' ','_').toLowerCase()
                ctrl++
                if(ctrl>20){
                    console.log('Roto')
                    break
                }
            }
            if(editor){

            }
            else {
                dateCreated=Date.now()
                console.log('Create')
                createSolution({route,tittle,description,dateCreated,dateUpdate})
            }
            //navigate('/admin/solution_manager')
        }
    }

    return (
        <>
        <main className="relative top-36 px-20">
            <h1 className="text-center text-4xl">{(editor)?('Editor de solución'):('Creador de solución')}</h1>
            <hr className="border-black border-1 w-full my-5"/>
            <form className="grid grid-cols-3 grid-rows-3 gap-4 grid-rows-10 w-full"  onSubmit={handleSubmit}>
                <General.Input type={'small_text'} name={'Titulo'} id={'tittle'} className={'col-start-2'} setValue={setTittle} value={tittle}/>
                <General.Input type={'active'} id={'active'} className={'flex flex-row items-center h-full col-start-3'} setValue={setActiveS} value={activeS}/>
                <General.Input type={'large-text'} name={'Descripción'} setValue={setDescription} className={'row-start-2 col-start-1 col-span-3 h-full'} value={description}/>
                <General.Input type={'submit'} className={'row-start-3 col-start-2'} name={(editor)?('Actualizar'):('Crear')}/>
            </form>
            {(editor && charged) &&
                <>
                <h2 className="w-full text-2xl text-center">Categorías</h2>
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


