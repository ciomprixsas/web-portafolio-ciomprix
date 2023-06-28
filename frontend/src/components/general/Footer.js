import * as React from 'react';
import { usePageContext } from '../../contexts/page_context'
import * as General from "./GeneralModules";

export const BASE_URL = process.env.REACT_APP_URL;

const Footer = ({}) => {
    const {pageInfo} = usePageContext();
    
    return (
        <>
            <footer className={'flex flex-col items-center justify-center content-center h-32 bg-gray-900 text-white openMedium lg:flex-row lg:h-20 lg:pl-24 lg:pr-32'}>
                <img src={BASE_URL + '/assets/img/ciomprix_logo.png'} alt='logo' className={'h-8 w-auto'} />
                <h6 className='w-full text-center text-xs my-3 lg:m-0 lg:text-lg'>
                    Copyright derechos reservados de CIOMPRIX 2023
                </h6>
                <General.Trigger href={'/admin/login'} className={'bg-gray-800 p-2 rounded-xl text-xs text-center text-gray-600 hover:text-white hover:bg-gray-700'}>Panel Administrativo</General.Trigger>
            </footer>
        </>
    )
}

export default Footer