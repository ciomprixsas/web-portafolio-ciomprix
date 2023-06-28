import * as React from "react";

import * as General from "../../components/general/GeneralModules";
import { usePageContext } from "../../contexts/page_context";
import { useNavigate } from "react-router-dom";


export const BASE_URL = process.env.REACT_APP_URL;

const AdmiLogIn = ({}) => {
    
    const [email,setEmail] = React.useState()
    const [password,setPassword] = React.useState()

    const userInfo= {email:'admin@ciomprix.com',password:'123456'}
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInfo.email == email && userInfo.password == password){
          global.session = true
          navigate('/admin/dashboard')
        }
    }


    return (
        <div className="flex w-full h-full">
            <General.BgImage className='flex flex-col items-start justify-center h-full w-4/6 text-white cover loginBg' src={BASE_URL+'/assets/img/login_background.jpg'}>
                <div className="relative h-auto w-full flex flex-col justify-center">
                    <span className={"w-full my-2 text-5xl opacity-100 ml-20 mt-10 z-20"}>Panel Administrativo</span>
                    <p className={"w-2/3 openMedium ml-20 mb-10 z-20"}>Administra tus contenidos para organizar y enriquecer tu portafolio y así sorprender a tus clientes</p>
                    <div className="absolute bg-black opacity-50 h-full w-full"/>
                </div>
            </General.BgImage>
            <div className="flex flex-col items-center justify-center w-2/6 px-10 bg-gray-900 text-white">
                <span className="mb-1 text-4xl">Iniciar sesión</span>
                <p className="mb-8 openMedium">Ingresa con tu usuario administrativo</p>
                <form className="grid gap-3 w-full" onSubmit={handleSubmit}>
                    <General.Input type={'small_text'} name={'Correo'} id={'email'} setValue={setEmail}/>
                    <General.Input type={'password'} name={'Contraseña'} id={'contraseña'} setValue={setPassword}/>
                    <General.Input type={'submit'} name='Ingresar'/>
                </form>
                <General.Trigger 
                    className={'w-full py-2 mt-3 border-2 border-gray-700 rounded-xl text-gray-700 text-center hover:text-white hover:border-white hover:bg-gray-700 transition-all duration-200'}
                    href={'/'}
                >
                    Volver
                </General.Trigger>
            </div>
        </div>
    );
}
    export default AdmiLogIn