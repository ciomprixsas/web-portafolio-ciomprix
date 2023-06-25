import * as React from "react";
import * as General from "../../components/general/GeneralModules";

import { usePageContext } from '../../contexts/page_context'

import {AiOutlinePlusCircle} from 'react-icons/ai'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePen,faRectangleXmark} from '@fortawesome/free-solid-svg-icons'
import AdmiMenu from "./AdmiMenu";
import Loading from "../Loading";

const SolutionManager= () =>{
    const {solutions} = usePageContext()

    if(solutions){

    return(
        <>
        <div className="grid grid-cols-3 relative top-36 gap-6 w-full px-16">
            <General.Cloner items={solutions} rprops={[['img','img_s'],['title','tittle_s'],['active','active_NoActive'],['key','id']]}>
                <ManagerCard/>
            </General.Cloner>
            <General.Trigger className={'flex flex-col items-center justify-center w-full h-full bg-gray-800 text-white rounded-2xl'} href={'/admi/solution_creator'}>
                    <AiOutlinePlusCircle color="white" size={'100px'}/>
                    <div className="mt-5 text-2xl openMedium">Create Solution</div>
            </General.Trigger>
        </div>
        <AdmiMenu/>
        </>
    )
    }
}

const ManagerCard = ({img,title,active}) => {

    const [activeS,setActiveS] = React.useState(active)


    const handleActive = () =>{
        setActiveS(true)
    }
    const handleDesactivate = () =>{
        setActiveS(false)
    }

    return(
        <div className="flex flex-col items-center relative h-58 w-full bg-gray-300 p-4 rounded-2xl">
            <FontAwesomeIcon icon={faSquarePen} style={{color: "#467bd8",position:'absolute',left:'15px'}} size="2xl"/>
            <FontAwesomeIcon icon={faRectangleXmark} size="2xl" style={{color: "#f21c1c",position:'absolute',right:'15px'}} />
            <img src={img} className="w-1/3 mt-4"/>
            <span className="w-full px-2 text-xl text-center uppercase mt-4">{title}</span>
            <div className="flex flex-row justify-center w-full mt-6" >
                <General.Trigger onClick={handleActive} className={`w-28 ${(activeS)&&'bg-green-500'} rounded-full text-center text-sm openMedium`}>ACTIVATED</General.Trigger>
                <General.Trigger onClick={handleDesactivate} className={`w-28 ${(!activeS)&&'bg-red-500'} rounded-full text-center text-sm openMedium`}>DESACTIVETED</General.Trigger>
                <div className={`h-5 w-5 ${(activeS)?'bg-green-500':'bg-red-500'} ml-4 rounded-full`} />
            </div>
        </div>
    )
}
export default SolutionManager