import * as React from "react";
import * as General from "./GeneralModules";


const Modal = ({children,state,className}) => {
    const [visible,setVisible] = React.useState(state);

    const closeModal = () => {
        setVisible(false);
    }

    return (
        <>
            {(visible) &&
            <div className='h-screen w-screen z-50 fixed top-0 left-0 bg-black bg-opacity-75 flex justify-center items-center'>
                <div className={`w-auto h-auto text-white ${className}`}>
                    <h3 className="openBold">
                        Video
                    <button className="float-right border-2 rounded-full px-2 openMedium active:bg-white active:bg-opacity-50 transition-all border-white" onClick={closeModal}>Cerrar</button>
                    </h3>
                    {children}
                </div>
            </div>}
        </>
    );
}
    export default Modal