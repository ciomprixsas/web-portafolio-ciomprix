import { useState,useCallback} from 'react';
import * as General from './general/GeneralModules';

const SolutionCard = ({title,src,className,video='/assets/vid/OPM_WP_3.mp4'}) => {
    const [modal,setModal] = useState(false);

    const activeModal = useCallback(() => {
        setModal(true)
    })

    const buttonAlert = useCallback(()=>{alert("button")})

    return (
        <>
            <General.BgImage className={`inline-block bg-center bg-resize bg-no-repeat bg-gray-300 rounded-3xl text-white ${className}`} src={src}>
                <div className='w-full h-full relative opacity-0 transition-all duration-300 hover:opacity-100'>
                    <div className='flex flex-col items-center justify-end h-1/2 w-full absolute bottom-0 rounded-b-3xl bg-gradient-to-t from-black to-transparent '>
                        <h4 className='openBold text-xl mb-10'>{title}</h4>
                        <button onClick={()=>{setModal(true)}}>Modal</button>
                        <General.Link 
                            className='w-24 py-1 mb-8 bg-blue-500 px-6 rounded-full text-l text-center openMedium transition-all duration-200 hover:scale-110 active:scale-90 '
                            mode="event"
                            href={buttonAlert}
                        >
                        Ir
                        </General.Link>
                    </div>
                </div>
            </General.BgImage>
            <General.Modal state={modal} className='w-[50vw]'>
                    <General.Video url={video} className={`mt-3`}/>
            </General.Modal>
        </>
    );
}

export default SolutionCard