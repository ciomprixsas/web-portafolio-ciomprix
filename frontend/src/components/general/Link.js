import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Link = ({href,mode,className,children}) => {
    //Hook para navegacion desde App.js
    const navigator = useNavigate()

    //Ejecucion de navegacion
    const handleToNavigate = () =>{
        navigator(href)
    }

    let eventProp

    //Definicion de modo
    switch (mode){
        case 'literal':eventProp = {href:href} //Referencias locales a la vista y externas
        break
        case 'navigate':eventProp = {onClick:handleToNavigate} //Navegacion entre vistas
        break
        case 'event':eventProp = {onClick:href} //Ejecucion de una funcion
    }
            
    return (
        <>
            <a className={`cursor-pointer ${className}`} {...eventProp}>
                {children}
            </a>
        </>
    );
}
    export default Link