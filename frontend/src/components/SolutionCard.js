import { useState,useEffect,useCallback} from 'react';
import * as General from './general/GeneralModules';
import { PageProvider, usePageContext } from '../contexts/page_context';

const SolutionCard = ({title,className,id}) => {

    const {getStorageByCategory} = usePageContext()

    const [modal,setModal] = useState(false)
    const [storage,setStorage] = useState()

    const settingStorage = useCallback((a)=>setStorage(a[0]))


    useEffect(()=>{
        if(storage===undefined)getStorageByCategory(id,settingStorage)
    },[])

    return (
        <>
           {storage!=undefined &&
           <>
           <General.BgImage className={`inline-block bg-center bg-cover bg-no-repeat bg-gray-300 rounded-3xl text-white ${className}`} src={storage.img_sc}>
                <div className='w-full h-full relative opacity-0 transition-all duration-300 hover:opacity-100'>
                    <div className='flex flex-col items-center justify-end h-1/2 w-full absolute bottom-0 rounded-b-3xl bg-gradient-to-t from-black to-transparent '>
                        <h4 className='openBold text-xl mb-10'>{title}</h4>
                        <General.Trigger
                            className='w-24 py-1 mb-8 bg-blue-500 px-6 rounded-full text-l text-center openMedium transition-all duration-200 hover:scale-110 active:scale-90 '
                            onClick={()=>{setModal(true)}}
                        >
                        Ir
                        </General.Trigger>
                    </div>
                </div>
            </General.BgImage>
            <General.Modal className='w-[50vw]' state={modal} setState={setModal}>
                <General.Video url={storage.vid_sc} className={`mt-3`}/>
            </General.Modal>
           </>
            }
        </>
    );
}

export default SolutionCard