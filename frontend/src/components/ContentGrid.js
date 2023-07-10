//Importacion de componentes
import * as General from './general/GeneralModules';
import InteractiveCard from "./InteractiveCard";

/*____________________________________________________
PROPS
className: String que define los estilos de ContentGrid
storage: Arreglo de objetos para setear las tarjetas, debe tener los atributos id(entero),tittle_sc(string),vid_sc(url) y img_sc(url)
________________________________________________________________*/

const ContentGrid = ({className,storage,title}) => {
    return (
        <>
            <div className={className} >
                <h3 className='lg:my-5 text-3xl w-1/3 my-4 text-black lg:text-4xl lg:w-full'>{title}</h3>
                <hr className='border-black border-[1px]'/>
                <div className='grid gap-3 grid-cols-1 lg:grid-cols-2 mt-6'>
                    <General.Cloner items={storage} rprops={[['key','id'],['id','id'],['title','tittle_sc'],['vid','vid_sc'],['src','img_sc']]}>
                        <InteractiveCard className={`h-96`}/>
                    </General.Cloner>
                </div>
            </div>
        </>
    );
}
export default ContentGrid