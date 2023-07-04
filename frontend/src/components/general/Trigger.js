import { Link} from 'react-router-dom';

export const BASE_URL = process.env.REACT_APP_URL;

/*____________________________________________________
PROPS
href:String que define la ruta a una vista
hrefl: String con el hash del landing solicitado
onClick: Funcion al hacer click
className: String que define los estilos del <Trigger>
children: Componentes internos que seran afectados por el evento del <Trigger>
________________________________________________________________*/

const Trigger = ({href,hrefl,onClick,className,children}) => {

    if(hrefl){
        //console.log(BASE_URL+'=' + window.location.pathname)
        if(window.location.pathname!=global.basepathname){
            console.log(global.basepathname.substring(0,global.basepathname.length-1)+'#'+hrefl)
            return(
                <a className={className} href={global.basepathname+'#'+hrefl}>
                    {children}
                </a>
            )
        }
        return(
            <a className={className} href={'#'+hrefl}>
                {children}
            </a>
        )
    }
    else if(href){
        return(
            <Link to={href} className={className} >
                {children}
            </Link>
        )
    }
    else if(onClick){
        return(
        <>
            <button onClick={onClick} className={className}>
                {children}
            </button>
        </>)
    }
    else{
        return(
            <div className={className}>
                {children}
            </div>
        )
    }
}
    export default Trigger