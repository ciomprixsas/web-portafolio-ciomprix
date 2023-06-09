import * as React from "react";


export const BASE_URL = process.env.REACT_APP_URL;

const Loading = ({}) => {
    return (
        <>
            <div className='flex items-center justify-center w-full h-full fixed top-0 left-0 bg-blue-500 z-50'>
                <img src={BASE_URL + '/assets/img/ciomprix_icono.png'} className="loading"/>
            </div>
        </>
    );
}
    export default Loading