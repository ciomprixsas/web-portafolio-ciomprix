import {BrowserRouter,Routes,Route} from 'react-router-dom'

//Informacion de la pagina
import { PageProvider,usePageContext} from './contexts/page_context'

//Importacion de vistas
import Landing from './views/Landing'
import SolutionView from './views/SolutionView'


function App() {
  const {solutions} = usePageContext()

  /*Identificador de dispositivo*/
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    global.naveType="movile"
  } else {
    global.naveType="computer"
  }

  let categoryRoutes 

  if(solutions!=undefined) {
    categoryRoutes  = Object.values(solutions).map(c=>{
      return(
        <Route key={c.id_solution} path={"/"+c.name_solution} element={<SolutionView categorie={c}/>}/>
      )
      }
    )
  }

  return (
    <>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          {categoryRoutes}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default () => <PageProvider><App/></PageProvider>
