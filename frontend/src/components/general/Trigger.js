import { useNavigate } from 'react-router-dom';

const Trigger = ({href,hrefl,onClick,className,children}) => {
    let render
    const navigator = useNavigate()
    
    //Ejecucion de navegacion
    const handleToNavigate = () =>{
        navigator('/'+href)
    }

    if(hrefl!=undefined){
            render = 
            <a className={className} href={'../#'+hrefl}>
                {children}
            </a>
    }
    else{
        render = 
        <>
        <button onClick={onClick!=undefined?onClick:handleToNavigate} className={className}>
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