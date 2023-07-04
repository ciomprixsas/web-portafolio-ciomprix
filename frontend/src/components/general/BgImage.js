/*____________________________________________________
PROPS
src: Fuente de la images
className: Estilos del elemento
children: Componentes internos en en BgImage
________________________________________________________________*/

export default function BgImage({src,className,children}) {

    return (
        <div className={className} style={{backgroundImage:`url(${src})`}} >
            {children}
        </div>
    )
}
