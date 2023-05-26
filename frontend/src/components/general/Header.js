import * as React from 'react'
import * as General from './GeneralModules'
import { usePageContext } from '../../contexts/page_context'

export default function Header({mode}){

    //Acceso al contexto de la pagina
    const {pageInfo,pageInfoApi} = usePageContext();
    
    return (
        <>  
            <header className={`flex items-center flex-row w-full h-32 px-24 bg-transparent text-base openMedium ${(mode === 'ligth')?'text-white':'text-black'}`} >
                {!(pageInfo===undefined) &&
                <General.Link href='/'>
                    <img 
                        src={(mode === 'ligth')?pageInfo.Logo[0]:pageInfo.Logo[1]} 
                        alt='logo' 
                        className='h-1/4 w-auto z-10' 
                    />
                </General.Link>
                }
                <nav className='flex flex-row justify-end items-center w-full z-10 h-full'>
                        {!(pageInfoApi===undefined) && 
                            <General.Cloner //Generador de menu
                                items={Object.values(pageInfoApi)} 
                                rprops={[['href','route'],['children','name_solution'],['key','solution_id']]}
                            >
                                <General.Link className={`px-5 h-full py-12 transition-colors duration-100 ${(mode === 'ligth')?'hover:bg-blue-500':'hover:bg-gray-200'}`}/>
                            </General.Cloner>
                        }
                </nav>
            </header>
        </>
    )
}