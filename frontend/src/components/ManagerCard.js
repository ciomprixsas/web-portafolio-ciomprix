//Importacion de componentes
import * as React from 'react'
import * as General from "./general/GeneralModules";

//Importacion de iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePen,faRectangleXmark} from '@fortawesome/free-solid-svg-icons'

/*____________________________________________________
PROPS
img: Url para definir la imagen que se mostrara
title: String que define el titulo de la tarjeta y es una llave unica del registro
active: Booleano que da un valor inicial a la interfaz de activacion
href: Url para redireccionar a la interfas de edicion del registro
________________________________________________________________*/
const ManagerCard = ({img,title,active,href}) => {

    const [activeS,setActiveS] = React.useState(active)

    const handleActive = () =>{
        setActiveS(true)
    }
    const handleDesactivate = () =>{
        setActiveS(false)
    }

    return(
        <div className="flex flex-col items-center relative h-58 w-full bg-gray-300 p-4 rounded-2xl">
            <General.Trigger href={href}>
            <FontAwesomeIcon icon={faSquarePen} style={{color: "#467bd8",position:'absolute',left:'15px'}} size="2xl"/>
            </General.Trigger>
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
export default ManagerCard