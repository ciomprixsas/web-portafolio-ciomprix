import * as React from "react";
export default function List({styles,items,children,props}){

    let i=0;

    const list= items.map(item=>
        <children.type key={i++}>
            {React.cloneElement(<li></li>,
            Object.assign(props,children.props),
            item)}
        </children.type>
    );

    return (
        <ul className={styles}>
            {list}
        </ul>
    );
}