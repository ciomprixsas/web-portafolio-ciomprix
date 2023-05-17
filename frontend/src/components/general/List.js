import * as React from "react";
import * as General from "./GeneralModules";

export default function List({styles,items,children,props}){

    let renderProps = Object.assign(props,children.props);

    let i=0;
    const nav= items.map(item=>
        <li key={i++}>
            {React.cloneElement(<children.type></children.type>,
            renderProps,
            item)}
        </li>
    );

    return (
        <ul className={styles}>
            {nav}
        </ul>
    );
}