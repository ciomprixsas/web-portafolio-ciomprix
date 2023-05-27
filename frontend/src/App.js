import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React,{ useEffect } from 'react'

//Informacion de la pagina
import { PageProvider,usePageContext} from './contexts/page_context'

//Importacion de vistas
import Landing from './views/Landing'
import SectionView from './views/SectionView'

export default () => <PageProvider><App/></PageProvider>

function App() {
  const {pageInfo} = usePageContext()


  let sectionRoutes 

  if(pageInfo!=undefined) {
    sectionRoutes  = pageInfo.Categories.map(c=>{
      return(
        <Route key={c.id} path={c.route} element={<SectionView categorie={c}/>}/>
      )
      }
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          {sectionRoutes}
        </Routes>
      </BrowserRouter>
    </>
  )
}


