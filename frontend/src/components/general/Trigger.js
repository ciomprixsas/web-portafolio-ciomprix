import { Link} from 'react-router-dom';
import { usePageContext } from "../../contexts/page_context"

export const BASE_URL = process.env.REACT_APP_URL;


const Trigger = ({href,hrefl,onClick,className,children}) => {

    if(hrefl){
        //console.log(BASE_URL+'=' + window.location.pathname)
        if(window.location.pathname!=global.basepathname){
            console.log(global.basepathname.substring(0,global.basepathname.length-1)+'#'+hrefl)
            return(
                <a className={className} href={global.basepathname.substring(0,global.basepathname.length-1)+'#'+hrefl}>
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