import { useState,} from 'react';
import * as General from './general/GeneralModules';

/*____________________________________________________
PROPS
tittle: String que define el titulo de la tarjeta
className: String que define los estilos de la tarjeta
href: Url de redireccion al interactuar con la tarjeta
src: Url para definir la imagen de fondo
vid: Url para definir el video que se despliga al interactuar con la tarjeta
________________________________________________________________*/
const InteractiveCard = ({title,className,href,src,vid}) => {

    const [modal,setModal] = useState(false)

    return (
        <>
           <>
           <General.BgImage className={`inline-block bg-center bg-cover bg-no-repeat bg-gray-300 rounded-3xl text-white ${className}`} src={src}>
                <div className={`w-full h-full relative transition-all duration-300 ${(global.naveType==="movile")?'opacity-100':'opacity-0 hover:opacity-100'}`}>
                    <div className='flex flex-col items-center justify-end h-2/3 w-full absolute bottom-0 rounded-b-3xl bg-gradient-to-t from-black to-transparent '>
                        <h4 className='w-full px-4 mb-6 openBold text-base xl:text-xl text-center'>{title}</h4>
                        {href!=undefined?
                        <General.Trigger
                            className='w-24 py-1 mb-8 bg-blue-500 px-6 rounded-full text-l text-center openMedium transition-all duration-200 hover:scale-110 active:scale-90 '
                            href={href}
                        >
                        Ir
                        </General.Trigger>
                        :
                        <General.Trigger
                        className='w-24 py-1 mb-8 bg-blue-500 px-6 rounded-full text-l text-center openMedium transition-all duration-200 hover:scale-110 active:scale-90 '
                        onClick={()=>{setModal(true)}}
                        >
                        Ver
                        </General.Trigger>}
                    </div>
                </div>
            </General.BgImage>
            <General.Modal className='w-[100vw] md:w-[70vw] lg:w-[50vw]' state={modal} setState={setModal}>
                <General.Video url={vid} className={`mt-3`}/>
            </General.Modal>
           </>
        </>
    );
}

export default InteractiveCard