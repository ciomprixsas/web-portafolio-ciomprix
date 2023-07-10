import * as React from "react";
import * as General from "../../components/general/GeneralModules";
import { useNavigate } from "react-router-dom";


//Iconos
import { IconContext }from 'react-icons'
import { BsGraphUp } from 'react-icons/bs'
import { GrMenu,GrStorage } from 'react-icons/gr'
import { MdManageSearch,MdCategory } from 'react-icons/md'
import {BiLogOutCircle} from 'react-icons/bi';

export const BASE_URL = process.env.REACT_APP_URL;

/*____________________________________________________
PROPS Menu
children: Arreglo de componentes tipo MenuItem
close: Funcion para ocultar el menu por medio de un estado
________________________________________________________________*/
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

/*____________________________________________________
PROPS Menu item
icon: Componente de icono
title: String que define el titulo de la opcion
href: Url de redireccion
________________________________________________________________*/

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
    //Estados
    const [menuOpened,setMenuOpened] = React.useState(false)
    
    //Funciones de control de menus
    const openMenu = () => setMenuOpened(true)
    const closeMenu = React.useCallback(() => setMenuOpened(false))
    
    const navigate = useNavigate();

    //Funcion de cierre de sesion
    const handleLogOut = () =>{
        global.session = false
        navigate('/admin/login')
    }

    return (
        <>
            <IconContext.Provider value={{color: "blue",size:'30px'}}>
            <header className='flex items-center flex-row fixed top-0 left-0 w-full h-20 text-sm openMedium justify-center bg-blue-500'>
                <General.Trigger className={'absolute left-10 text-white'} onClick={openMenu}>
                    <GrMenu style={{color:'white'}}/>
                </General.Trigger>
                <img 
                    src={BASE_URL + '/assets/img/ciomprix_logo.png'} 
                    alt='logo' 
                    className='w-36 z-10 lg:w-48 h' 
                />
                 <General.Trigger className={'absolute right-10 text-black'} onClick={handleLogOut}>
                    <BiLogOutCircle style={{color:'white'}}/>
                </General.Trigger>
            </header>
            </IconContext.Provider>
            {menuOpened &&
            <Menu close={closeMenu}>
                    <MenuItem icon={<BsGraphUp size={'30px'}/>} title='Dashboard' href={'/admin/dashboard'}/>
                    <MenuItem icon={<MdManageSearch size={'30px'}/>} title='Soluciones' href={'/admin/solution_manager'}/>
                    <MenuItem icon={<MdCategory size={'30px'}/>} title='Categorías' href={'/admin/category_manager'}/>
                    <MenuItem icon={<GrStorage size={'30px'}/>} title='Contenidos' href={'/admin/storage_manager'}/>
            </Menu>
            }
        </>
    );
}
//Dashboard


//Gestion de soluciones

export default AdmiMenu