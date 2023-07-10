import * as React from "react";
import * as General from "./GeneralModules";

//Importacion de iconos desde fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePen} from '@fortawesome/free-solid-svg-icons'

/*____________________________________________________
PROPS OPTION
title:String que define el texto que se muestra en las opciones de lista desplegable
value:Entero que define el valor de las opciones de lista desplegable
________________________________________________________________*/
const Option = ({title,value})=>{
    return(
        <option value={value}>
            {title}
        </option>
    )
}

/*____________________________________________________
PROPS INPUT
type: String que define el tipo de <input> retornado
    'small-text': Campo de texto
    'password': Campo de contraseña
    'submit': Boton de envio
    'file-img': Selector de archivo de imagen
    'active': Switch booleano 
    'large-text': Caja de texto
    'selection': Lista desplegable

placeholder: String que define el mensaje placeholder de los campos de texto
name: String que define el texto del <label> asociada al <input>
id: String que define el id de cada <input> para relacionarlo con el <label>
className: String que define los estilos del contenedor del input
setValue: Funcion de asignacion de un hook useState 
value: Variable de un hook useState del cual toma su valor
options: Array con atributos {nombre,id} para setear las opciones en case de type='selection'

________________________________________________________________*/

const Input = ({type,placeholder,name,id,className,setValue,value,options}) => {

    const [img,setImg] = React.useState()


    const handleActive = () =>{//Asignacion true a type='active'
        setValue(true)
    }

    const handleDesactivate = () =>{//Asignacion false a type='active'
        setValue(false)
    }


    const handleInput = (e) => {//Asignacion a type='file-img'
        console.log(e.target.files)
        const reader = new FileReader()
        reader.onload = (e)=>{
            setImg(e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleChange = (value) => {//Asignacion a los demas type
        setValue(value)
    }

    const setInput = ()=>{//Return segun type
        switch(type){
            case 'small_text':
                return(
                    <>
                    <label className=" w-full mb-10 openMedium" htmlFor={id} >{name}</label>
                    <input 
                        className='w-full mt-2 py-1 px-2 bg-gray-900 border-2 border-gray-700 rounded-lg openMedium  text-white ' 
                        type="text" 
                        name={id} 
                        id={id} 
                        placeholder={placeholder?placeholder:name}
                        onChange={(e)=>handleChange(e.target.value)}
                        value={value}
                    />
                    </>
                )
            break
            case 'password':
                return(
                    <>
                    <div className="flex flex-row nowrap w-full h-auto">
                        <label className="openMedium" htmlFor={id} >{name}</label>
                        <General.Trigger className={'invisible w-full text-end openMedium text-gray-500 transition-all duration-500 hover:text-white hover:underline'}>
                            Olvidaste tu clave?
                        </General.Trigger>
                    </div>
                    <input 
                        className='w-full mt-2 py-1 px-2 bg-gray-900 border-2 border-gray-700 rounded-lg openMedium' 
                        type="password" 
                        name={id} 
                        id={id} 
                        placeholder={placeholder?placeholder:name}
                        onChange={(e)=>handleChange(e.target.value)}
                        value={value}
                    />
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
                            <input 
                                className="absolute opacity-0 w-8 h-8 z-10" 
                                type={'file'} 
                                onInput={handleInput} 
                                accept="jpg" 
                                id={id}
                            />
                            <FontAwesomeIcon icon={faSquarePen} style={{color: "#467bd8",position:'relative'}} size="2xl"/>
                        </div>
                        <General.BgImage src={img} className="w-full h-48 cover mt-5 imgInput"/>
                    </>
                )
            break
            case 'active':
                return(
                    <>
                    <button type='button' onClick={handleActive} className={`w-28 h-10 ${(value)&&'bg-green-500'} rounded-full text-center text-sm openMedium py-2`}>ACTIVATED</button>
                    <button type='button'onClick={handleDesactivate} className={`w-28 h-10 ${(!value)&&'bg-red-500'} rounded-full text-center text-sm openMedium py-2`}>DESACTIVETED</button>
                    <div className={`h-5 w-5 ${(value)?'bg-green-500':'bg-red-500'} ml-4 rounded-full`} />
                    </>
                )
            break
            case 'large-text':
                return(
                    <>
                    <label className="w-full mb-10 openMedium" htmlFor={id}>{name}</label>
                    <textarea 
                        className='w-full py-1 px-2 bg-gray-900 border-2 border-gray-700 rounded-lg openMedium text-white ' 
                        name={id} 
                        id={id} 
                        placeholder={placeholder?placeholder:name}
                        onChange={(e)=>handleChange(e.target.value)}
                        value={value}
                    />
                    </>
                )
            break
            case 'selection':
                return(
                    <>
                        <label htmlFor={id} className="w-full mb-10 openMedium">{name}</label>
                        <br/>
                        <select 
                            id={id} 
                            className="w-full py-1 px-2 bg-gray-900 border-2 border-gray-700 rounded-lg openMedium text-white"
                            value={value}
                            onChange={(e)=>handleChange(e.target.value)}
                        >
                            <option value={'none'}>{placeholder}</option>
                            {(options)&&
                            <General.Cloner items={options} rprops={[['value','id'],['title','name'],['key','id']]}>
                                <Option/>
                            </General.Cloner>}
                        </select>
                    </>
                )
            break
        }
    }

    let input = setInput()

    return(
        <div className={className}>
            {input}
        </div>
    )
}
    export default Input