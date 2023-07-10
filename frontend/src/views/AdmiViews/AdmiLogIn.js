import * as React from "react";

//Importacion de componentes
import * as General from "../../components/general/GeneralModules";
import { usePageContext } from "../../contexts/page_context";
import { useNavigate } from "react-router-dom";


export const BASE_URL = process.env.REACT_APP_URL;

const AdmiLogIn = ({}) => {
    //Estados
    const [email,setEmail] = React.useState()
    const [password,setPassword] = React.useState()
    const [error,setError] = React.useState(false)

    //Funciones para acceso a Api
    const {getUsers} = usePageContext()
    
    const navigate = useNavigate();

    
    //Configuración de objetos para correcta configuración de componentes
    const handleSubmit = async(e) => {
        e.preventDefault();
        let allUsers = await getUsers()
        for(let u of allUsers){
            if(u.mail_u == email){
                if(u.pass_u == password){
                    global.session = true
                    navigate('/admin/dashboard')
                }
                else{
                    setError(true)
                }
                break
            }
        }
        console.log(global.session)
        if(!global.session){
            console.error('Error')
            setError(true)
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

            <General.Modal state={error} title="Error" setState={setError}>
                <div className="flex justify-center items-center w-80 h-auto p-10 bg-white rounded-xl">
                    <span>Correo o contraseña incorrectos</span>
                </div>
            </General.Modal>
        </div>
    );
}
    export default AdmiLogIn