import * as React from "react"

export default function List({items,children,props,k}){
    
    function listMaking (){
        let list= [];
        let rederProps ={...children.props,...props}
        for(let item of items){
            //if(children.type=="li")rederProps.key=item[k]
            list.push(React.cloneElement(<children.type/>,{...rederProps,key:item[k]},item.title))
        }

        console.log(list)

        return list
    }

    const renderList = listMaking();

    return (
        <>
            {renderList}
        </>
    )
        /*<children.type key={item.key}>
            {React.cloneElement(children.type,
            Object.assign(props,children.props),
            item)}
        </children.type>*/
}