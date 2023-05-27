import * as React from 'react'
import * as General from './GeneralModules'
import { usePageContext } from '../../contexts/page_context'

const Header = ({mode}) => {

    //Acceso al contexto de la pagina
    const {pageInfo,pageInfoApi} = usePageContext();
    
    return (
        <>  
            <header className={`flex items-center flex-row w-full h-20 px-24  text-sm openMedium ${(mode === 'ligth')?'text-white bg-transparent':'text-black bg-gray-200'}`} >
                {!(pageInfo===undefined) &&
                <General.Link href='/'>
                    <img 
                        src={(mode === 'ligth')?pageInfo.Logo[0]:pageInfo.Logo[1]} 
                        alt='logo' 
                        className='w-48 z-10' 
                    />
                </General.Link>
                }
                <nav className='flex flex-row justify-end items-center w-full z-10 h-full'>
                        {!(pageInfoApi===undefined) && 
                            <General.Cloner //Generador de menu
                                items={Object.values(pageInfoApi)} 
                                rprops={[['href','route'],['children','name_solution'],['key','solution_id']]}
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