import { useNavigate } from 'react-router-dom';

const Trigger = ({href,onClick,className,children}) => {
    let render
    const navigator = useNavigate()
    
    //Ejecucion de navegacion
    const handleToNavigate = () =>{
        navigator('/'+href)
    }

    if(href!=undefined && href[0]==='#'){
            render = 
            <a className={className} href={href}>
                {children}
            </a>
    }
    else{
        render = 
        <>
        <button onClick={href!=undefined?handleToNavigate:onClick} className={className}>
            {children}
        </button>
        </>
    }
            
    return (
        <>
            {render}
        </>
    );
}
    export default Trigger