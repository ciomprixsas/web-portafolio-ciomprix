import * as React from 'react';
import { usePageContext } from '../../contexts/page_context'


const Footer = ({}) => {
    const {pageInfo} = usePageContext();
    
    return (
        <>
            <footer className={'flex flex-col items-center justify-center content-center h-32 bg-gray-900 text-white openMedium lg:flex-row lg:h-20 lg:pl-24 lg:pr-32'}>
                {!(pageInfo===undefined) &&<img src={pageInfo.Logo[0]} alt='logo' className={'h-8 w-auto'} />}
                <h6 className='w-full text-center text-xs my-3 lg:m-0 lg:text-lg'>
                    Copyright derechos reservados de CIOMPRIX 2023
                </h6>
            </footer>
        </>
    )
}

export default Footer