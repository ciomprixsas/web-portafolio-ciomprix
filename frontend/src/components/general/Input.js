import * as React from "react";
import * as General from "./GeneralModules";


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePen} from '@fortawesome/free-solid-svg-icons'

const Input = ({type,placeholder,name,id,className}) => {

    const [img,setImg] = React.useState()

    const handleInput = (e) => {
        console.log(e.target.files)
        const reader = new FileReader()
        reader.onload = (e)=>{
            setImg(e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const setInput = ()=>{
        switch(type){
            case 'small_text':
                return(
                    <>
                    <label className=" w-full mb-10 openMedium" htmlFor={id} >{name}</label>
                    <input className='w-full my-2 py-1 px-2 bg-gray-900 border-2 border-gray-700 rounded-lg openMedium' type="text" name={id} id={id} placeholder={placeholder?placeholder:name}/>
                    </>
                )
            break
            case 'password':
                return(
                    <>
                    <div className="flex flex-row nowrap w-full h-auto">
                        <label className="openMedium" htmlFor={id} >{name}</label>
                        <General.Trigger className={'w-full text-end openMedium text-gray-500 transition-all duration-500 hover:text-white hover:underline'}>Olvidaste tu clave?</General.Trigger>
                    </div>
                    <input className='w-full my-2 py-1 px-2 bg-gray-900 border-2 border-gray-700 rounded-lg openMedium' type="password" name={id} id={id} placeholder={placeholder?placeholder:name}/>
                    </>
                )
            break
            case 'submit':
                return(
                <>
                    <input type="submit" className="w-full p-2 rounded-lg bg-blue-500" value={name}/>
                </>)
            break
            case 'file-img':
                return(
                    <>
                        <label htmlFor={id} >{name}</label>
                        <div className="absolute right-0 inline h-auto mb-">
                            <input className="absolute opacity-0 w-8 h-8 z-10" type={'file'} onInput={handleInput} accept="jpg" id={id}/>
                            <FontAwesomeIcon icon={faSquarePen} style={{color: "#467bd8",position:'relative'}} size="2xl"/>
                        </div>
                        <img src={img} className="w-full h-48 cover mt-5"/>
                    </>
                )
        }}

    let input = setInput()

    return(
        <div className={className}>
            {input}
        </div>
    )
}
    export default Input