import * as React from 'react';
import { usePageContext } from '../../contexts/page_context'


const Footer = ({}) => {
    const {pageInfo} = usePageContext();
    
    return (
        <>
            <footer className={'flex flex-row items-center content-center h-20 pl-24 pr-32 bg-gray-900 text-white openMedium font-normal'}>
                {!(pageInfo===undefined) &&<img src={pageInfo.Logo[0]} alt='logo' className={'h-8 w-auto'} />}
                <h6 className='w-full text-center'>
                    Copyright derechos reservados de CIOMPRIX 2023
                </h6>
            </footer>
        </>
    )
}

export default Footer