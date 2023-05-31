import ReactPlayer from 'react-player'//Importacion de componente de video
import { BsFillPlayFill,BsPauseFill } from 'react-icons/bs';
import { TbReload } from 'react-icons/tb';
import { useState,useCallback,useRef } from 'react';
import { BASE_URL } from './BgImage';

const VideoControls = ({//Componente de controles del video
    progress,
    duration,
    play,
    fullscreen,
    handlePlay,
    handleReplay,
    handleProgressModify,
    handleFullscreen}) =>{

    const percentProgress = (progress/duration)*100 //Control de barra de progreso

    return(
                <div className='absolute bottom-1 w-[99%] h-8 bg-black flex items-center px-4 rounded-full z-10'>
                    <button 
                        className='w-5 active:scale-125 transition-all durition-100' 
                        onClick={(progress<duration)?handlePlay:handleReplay}
                    >
                        {progress<duration?(!play ?
                        <BsFillPlayFill />:
                        <BsPauseFill />):
                        <TbReload/>
                        }
                        
                    </button> 
                    <div className='relative flex items-center w-full h-1 mx-3 bg-gray-700 rounded-full'>
                        <div 
                        className={`bg-red-600 absolute h-full rounded-full z-0`} 
                        style={{width:`${percentProgress}%`}}
                        />
                        <input 
                            type='range' 
                            min={0} 
                            max={1} 
                            value={percentProgress/100} 
                            step={0.01} 
                            className=' h-full w-full z-10 opacity-0' 
                            onChange={handleProgressModify}/>
                    </div>
                    
                    <button 
                        className={`w-5 h-3 border-2 border-white transition-all durition-100 ${!fullscreen?'active:scale-125':'active:scale-75'}`} 
                        onClick={handleFullscreen}
                    />
                </div>
    )
}


const Video = ({url,className}) => {//Componente principal
    //Acceso a la misma instancia
    const videoRef = useRef(null)

    //Declaracion de estados
    const [play,setPlay] = useState(true)
    const [progress,setProgress] = useState(0)
    const [duration,setDuration] = useState(0)
    const [fullscreen,setFullscreen] = useState(false)

    //Control de reproduccion
    const handlePlay= useCallback(() => setPlay(!play))

    //Control manual de progreso
    const handleReplay = useCallback(() => {
        setProgress(0)
        videoRef.current.seekTo(0,'fraction')
        setPlay(true)
    })

    //Control manual de progreso
    const handleProgressModify= useCallback((e) => {
        const newProgress = e.target.value
        videoRef.current.seekTo(newProgress,'fraction')
    })

    //Control de pantalla completa
    const handleFullscreen = useCallback(()=>{
        setFullscreen(!fullscreen)
    })

    return (
        <>
            <div className={`flex items-center ${fullscreen?'fixed h-screen w-full top-0 left-0':'relative w-full'} ${className}`}>
                <div className='flex items-center w-full flex-col relative' >
                    <div onClick={handlePlay} className='w-full h-full'>
                        <ReactPlayer 
                            volume={0}
                            playing={play}
                            progressInterval={100}
                            url={url} 
                            className='z-0'
                            width={`${100}%`}
                            height={`${100}%`}  
                            ref={videoRef}
                            onProgress={(t)=>{setProgress(t.playedSeconds)}} //Actualizacion de progreso
                            onDuration={(d)=>{setDuration(d)}}
                        />
                    </div>
                    <VideoControls 
                        progress={progress}
                        duration={duration}
                        play={play}
                        fullscreen={fullscreen}
                        handlePlay={handlePlay}
                        handleProgressModify={handleProgressModify}
                        handleFullscreen={handleFullscreen} 
                        handleReplay={handleReplay}
                    />
                    <img 
                        src={`${BASE_URL}/assets/img/play.png`}
                        className={`absolute top-[40%] h-1/5 opacity-75 transition-all duration-100 active:scale-125 ${(play) && 'invisible'}`} 
                        onClick={handlePlay} 
                    />
                </div>
            </div>
        </>
    );
}
    export default Video