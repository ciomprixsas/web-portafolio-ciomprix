import * as React from 'react'
import * as General from './GeneralModules'
import { usePageContext } from '../../contexts/page_context'

const Header = ({mode}) => {

    //Acceso al contexto de la pagina
    const {pageInfo,pageInfoApi} = usePageContext();

    return (
        <>  
            <header 
                className={
                    `flex items-center flex-row w-full h-20 text-sm openMedium justify-center 
                    ${(mode === 'ligth')?'text-white bg-transparent':'text-black bg-gray-200'} lg:px-24`
                } 
             >
                {!(pageInfo===undefined) &&
                <General.Link href='/'>
                    <img 
                        src={(mode === 'ligth')?pageInfo.Logo[0]:pageInfo.Logo[1]} 
                        alt='logo' 
                        className='w-36 z-10 lg:w-48' 
                    />
                </General.Link>
                }
                <nav className='flex flex-row justify-end items-center w-0 z-10 h-full invisible lg:visible lg:w-full'>
                        {!(pageInfoApi===undefined) && 
                            <General.Cloner //Generador de menu
                                items={Object.values(pageInfoApi)} 
                                rprops={[['href','route'],['children','name_solution'],['key','id_solution']]}
                            >
                                <General.Link className={`px-5 h-full py-8 transition-colors duration-100 ${(mode === 'ligth')?'hover:bg-blue-500':'hover:bg-gray-300'}`}/>
                            </General.Cloner>
                        }
                </nav>
            </header>
        </>
    )
}

export default Header