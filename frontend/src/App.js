import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React,{ useEffect } from 'react'
import Test from './views/Test'

//Informacion de la pagina
import { PageProvider,usePageContext} from './contexts/page_context'

//Importacion de vistas
import Landing from './views/Landing'

export default () => <PageProvider><App/></PageProvider>

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


