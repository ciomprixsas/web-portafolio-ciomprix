import * as React from "react";
import * as General from "../../components/general/GeneralModules";
import AdmiMenu from "./AdmiMenu";

const SolutionForm = ({}) => {
    return (
        <>
        <form className="relative top-36">
            <General.Input type={'file-img'} name={'Icono'} id={'icon'} className={'relative w-48 h-56'}/>
        </form>
        <AdmiMenu/>
        </>
    );
}

export default SolutionForm


