import * as React from "react";
import * as General from "../../components/general/GeneralModules";


//Iconos
import { IconContext }from 'react-icons'
import { BsGraphUp } from 'react-icons/bs'
import { GrMenu } from 'react-icons/gr'
import { MdManageSearch } from 'react-icons/md'

export const BASE_URL = process.env.REACT_APP_URL;

//Menu de navegacion
const Menu = ({children, close}) => {
    
    return(
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={close}/>
        <nav className="fixed top-0 left-0 w-1/4 h-full bg-white py-6" onClick={close}>
            <span className="text-2xl mx-4">Administrador</span>
            <hr className="my-2 border-gray-400 border-2 mx-4"/>
            {children}
        </nav>
        </>
    )
}

const MenuItem = ({icon,title,href}) => {
    return(
        <General.Trigger className="flex items-center justify-start p-3 w-full p-4 cursor-pointer transition-all duration-500 hover:bg-gray-400" href={href}>
            {icon}
            <span className="ml-2 text-md openMedium">{title}</span>
        </General.Trigger>
    )
}

//Principal View
const AdmiMenu = ({}) => {

    const [menuOpened,setMenuOpened] = React.useState(false)

    const openMenu = () => setMenuOpened(true)

    const closeMenu = React.useCallback(() => setMenuOpened(false))

    return (
        <>
            <IconContext.Provider value={{color: "blue",size:'30px'}}>
            <header className='flex items-center flex-row fixed top-0 left-0 w-full h-20 text-sm openMedium justify-center bg-blue-500'>
                <General.Trigger className={'absolute left-10 text-white'} onClick={openMenu}>
                    <GrMenu/>
                </General.Trigger>
                <img 
                    src={BASE_URL + '/assets/img/ciomprix_logo.png'} 
                    alt='logo' 
                    className='w-36 z-10 lg:w-48 h' 
                />
            </header>
            </IconContext.Provider>
            {menuOpened &&
            <Menu close={closeMenu}>
                    <MenuItem icon={<BsGraphUp size={'30px'}/>} title='Dashboard' href={'/admi_dashboard'}/>
                    <MenuItem icon={<MdManageSearch size={'30px'}/>} title='Solutions' href={'/solution_manager'}/>
            </Menu>
            }
        </>
    );
}
//Dashboard


//Gestion de soluciones

export default AdmiMenu