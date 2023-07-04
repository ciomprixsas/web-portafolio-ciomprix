import * as General from './GeneralModules'
import { usePageContext } from '../../contexts/page_context'

export const BASE_URL = process.env.REACT_APP_URL;

/*____________________________________________________
PROPS
mode:Stirng que define el modo oscuro o modo claro('ligth')
________________________________________________________________*/


const Header = ({mode}) => {

    const {solutions} = usePageContext()


    return (
        <>  
            <header 
                className={
                    `flex items-center flex-row w-full h-20 text-sm openMedium justify-center 
                    ${(mode === 'ligth')?'text-white bg-transparent':'text-black bg-gray-200'} lg:px-10 xl:px-24`
                } 
             >
                <General.Trigger href='/'>
                    <img 
                        src={(mode === 'ligth')? BASE_URL + '/assets/img/ciomprix_logo.png': BASE_URL + '/assets/img/ciomprix_logo_dark.png'} 
                        alt='logo' 
                        className='w-36 z-10 lg:w-48' 
                    />
                </General.Trigger>
                
                <nav className='flex flex-row justify-end items-center w-0 z-10 h-full invisible lg:visible lg:w-full'>
                        <General.Cloner //Generador de menu 
                            items={solutions} 
                            rprops={[['hrefl','route_s'],['children','tittle_s'],['key','id']]}
                            lim={4}
                        >
                            <General.Trigger className={`px-5 h-full py-8 transition-colors duration-100 ${(mode === 'ligth')?'hover:bg-blue-500':'hover:bg-gray-300'}`}/>
                        </General.Cloner>
                </nav>
            </header>
        </>
    )
}

export default Header