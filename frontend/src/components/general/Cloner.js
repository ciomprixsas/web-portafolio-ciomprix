import * as React from 'react'

/*____________________________________________________
PROPS
items: Arreglo de objetos con la informacion que se requieren clonar
children: Componente interno de Cloner, el cual se toma como plantilla para los clones
chlildrenProps: Props definidos del componente interno de Cloner
rprops: Mapa de strings definido para asignarle valores a los props del componente interno.[['prop','atributo proveniente de items'],...]
lim: Entero que limita la cantidad de clones
________________________________________________________________*/

export default function Cloner({items,children,childrenProps,rprops,lim}){
    //Inicializacion de pros hijos
    let renderProps ={...children.props,childrenProps}

    //Extraccion de subarreglo si esta limitado(lim)
    let localItems = (lim)?items.slice(0,lim):items

    const cloned = localItems.map((item)=>{
        if(rprops!=undefined||rprops!=null){
            //Asignacion de props relativos a los items
            for(let kv of rprops){
                renderProps = {...renderProps,[kv[0]]:item[kv[1]]}
            }
        }
        return(
            <children.type {...renderProps}/>
        )
    })

    return (
        <>
            {cloned}
        </>
    )
}