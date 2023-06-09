import { useState,useEffect,useCallback} from 'react';
import * as General from './general/GeneralModules';
import { PageProvider, usePageContext } from '../contexts/page_context';
import { BASE_URL } from './general/BgImage';

const InteractiveCard = ({title,className,id,width,href}) => {

    const {getStorage,cards_img} = usePageContext()

    const [modal,setModal] = useState(false)
    const [storage,setStorage] = useState()

    const setData = async() =>{
        setStorage(await getStorage(id))
    }
    
    if(storage===undefined) setData()


    return (
        <>
           {storage!=undefined &&
           <>
           <General.BgImage className={`inline-block bg-center bg-cover bg-no-repeat bg-gray-300 rounded-3xl text-white ${className}`} src={cards_img[parseInt(Math.random()*3)]}/*{storage.img_sc}*/ width={width}>
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
                <General.Video /*url={storage.vid_sc}*/  className={`mt-3`}/>
            </General.Modal>
           </>
            }
        </>
    );
}

export default InteractiveCard