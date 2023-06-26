import * as React from "react";
import * as General from "../../components/general/GeneralModules";
import AdmiMenu from "./AdmiMenu";
import { useNavigate } from "react-router-dom";

const SolutionForm = ({}) => {
    const [activeS,setActiveS] = React.useState(false)
    const [name,setName] = React.useState()
    const [tittle,setTittle] = React.useState()
    const [error,setError] = React.useState(false)
    
    const navigate = useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault()
        if(!tittle||!name){
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
            console.log(`${name},${tittle},${r},${activeS}`)
            navigate('/admi/solution_manager')
        }
    }

    return (
        <>
        <form className="relative top-36 grid grid-cols-3 gap-4 grid-rows-10 w-full gap-5 px-20" onSubmit={handleSubmit}>
            {/*
                <General.Input type={'file-img'} name={'Icono'} id={'icon'} className={'relative w-full h-auto col-start-1'}/>
                <General.Input type={'file-img'} name={'Banner'} id={'banner'} className={'relative w-full h-auto'}/>
            */}
            <General.Input type={'small_text'} name={'Name'} id={'name'} className={'col-start-1'} setValue={setName}/>
            <General.Input type={'small_text'} name={'Tittle'} id={'tittle'} className={'col-start-2'} setValue={setTittle}/>
            <General.Input type={'active'} name={'Tittle'} id={'tittle'} className={'flex flex-row items-center h-full col-start-3'} setValue={setActiveS} active={activeS}/>
            <General.Input type={'submit'} className={'col-start-2'}/>
        </form>
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


