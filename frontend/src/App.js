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
import CategoryManager from './views/AdmiViews/CategoryManager'
import StorageManager from './views/AdmiViews/StorageManager'

function RouteProtector({login,redirect,children}){
  if(login){
    if(global.session){
      return children
    }
    else{
      return <Navigate to={redirect}/>
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
          <Route key={s.id} path={s.route_s+'/:id'} element={<SolutionView title={s.tittle_s} description={s.description_s} banner={s.img_banner_s
          }/>}/>
        )
    })

    return (
      <>
        <BrowserRouter basename={window.location.pathname || ''}>
          <Routes>
            <Route exact path='/land' element={<Landing/>}/>
            {solutionRoutes}
            <Route path='/admin/login' element={<AdmiLogin/>}/>
            <Route exact path='/' element={
              <RouteProtector login redirect={'/admin/login'}>
                <AdmiDashboard/>
              </RouteProtector>
            }/>
            <Route exact path='/admin/solution_manager' element={
              <RouteProtector login redirect={'/admin/login'}>
                <SolutionManager/>
              </RouteProtector>
            }/>
            <Route exact path='/admin/solution_creator' element={
              <RouteProtector login redirect={'/admin/login'}>
                <SolutionForm/>
              </RouteProtector>
            }/>
            <Route exact path='/admin/solution_editor/:id' element={
              <RouteProtector login redirect={'/admin/login'}>
                <SolutionForm editor/>
              </RouteProtector>
            }/>
            <Route exact path='/admin/category_manager' element={
              <RouteProtector login redirect={'/admin/login'}>
                <CategoryManager/>
              </RouteProtector>
            }/>
            <Route exact path='/admin/storage_manager' element={
              <RouteProtector login redirect={'/admin/login'}>
                <StorageManager/>
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
