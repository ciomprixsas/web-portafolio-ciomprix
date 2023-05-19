import * as React from "react"
export default function List({styles,items,children,props}){

    let i=0

    const list= items.map(item=>
        <li key={i++}>
            {React.cloneElement(children.type,
            Object.assign(props,children.props),
            item)}
        </li>
    )

    return (
        <ul className={styles}>
            {list}
        </ul>
    )
}