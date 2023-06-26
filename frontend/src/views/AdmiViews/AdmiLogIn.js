import * as React from "react";

import * as General from "../../components/general/GeneralModules";
import { usePageContext } from "../../contexts/page_context";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdmiLogIn = ({}) => {
    
    const [user,setUser] = React.useState()
    const [password,setPassword] = React.useState()

    const {LogIn,sessionOpened} = usePageContext()
    
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        LogIn(user,password)
    }

    React.useEffect(()=>{
        if(sessionOpened){
          navigate('/admi/dashboard')
        }
    })

    return (
        <div className="flex w-full h-full">
            <General.BgImage className='flex flex-col items-start justify-center h-full w-4/6 p-20 bg-purple-800 text-white' src={'/frontend/public/assets/img/imagedefaul.png'}>
                <span className="w-full my-2 text-5xl">Brand</span>
                <p className="w-2/3 openMedium"><General.Lorem long={200}/></p>
            </General.BgImage>
            <div className="flex flex-col items-center justify-center w-2/6 px-10 bg-gray-900 text-white">
                <span className="mb-1 text-4xl">Log in</span>
                <p className="mb-8 openMedium">Sign in to access your account</p>
                <form className="grid  gap-6 w-full" onSubmit={handleSubmit}>
                    <General.Input type={'small_text'} name={'Usuario'} id={'usuario'} setValue={setUser}/>
                    <General.Input className='mt-4' type={'password'} name={'Contraseña'} id={'contraseña'} setValue={setPassword}/>
                    <General.Input type={'submit'} name='Ingresar'/>
                </form>
            </div>
        </div>
    );
}
    export default AdmiLogIn