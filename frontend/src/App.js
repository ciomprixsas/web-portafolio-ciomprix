import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

//Informacion de la pagina
import { PageProvider,usePageContext} from './contexts/page_context'

//Importacion de vistas
import Landing from './views/Landing'
import Loading from './views/Loading'
import AdmiLogin from './views/AdmiViews/AdmiLogIn'
import { useState} from 'react'
import SolutionView from './views/SolutionView'
import AdmiDashboard from './views/AdmiViews/AdmiDashboard'
import SolutionManager from './views/AdmiViews/SolutionManager'
import SolutionForm from './views/AdmiViews/SolutionForm'

function RouteProtector({login,redirect,children}){
  const {sessionOpened} = usePageContext()
  if(login){
    if(sessionOpened){
      return children
    }
    else{
      
    }
    
  }
  return children
}

function App() {
  const {solutions} = usePageContext()

  /*Identificador de dispositivo*/
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    global.naveType="movile"
  } else {
    global.naveType="computer"
  }
  
  let solutionRoutes 

  if(!solutions){
    return <Loading/>
  }
  else if(solutions){
    solutionRoutes  = solutions.map((s)=>{
        return(
          <Route key={s.id} path={s.routes_s+'/:id'} element={<SolutionView title={s.tittle_s} description={s.description_s} banner={s.img_banner_s
          }/>}/>
        )
    })

    return (
      <>
        <BrowserRouter basename={window.location.pathname || ''}>
          <Routes>
            <Route exact path='/' element={<Landing/>}/>
            {solutionRoutes}
            <Route path='/admi/login' element={<AdmiLogin/>}/>
            <Route exact path='/admi/dashboard' element={
              <RouteProtector login redirect={'/admi/login'}>
                <AdmiDashboard/>
              </RouteProtector>
            }/>
            <Route exact path='/admi/solution_manager' element={
              <RouteProtector login>
                <SolutionManager/>
              </RouteProtector>
            }/>
            <Route exact path='/admi/solution_creator' element={
              <RouteProtector login>
                <SolutionForm/>
              </RouteProtector>
            }/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
  


}

export default () => {
  return<PageProvider><App/></PageProvider>
}
