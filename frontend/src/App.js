import {BrowserRouter,Routes,Route} from 'react-router-dom'

//Informacion de la pagina
import { PageProvider,usePageContext} from './contexts/page_context'

//Importacion de vistas
import Landing from './views/Landing'
import SolutionView from './views/SolutionView'


function App() {
  const {pageInfo} = usePageContext()


  let sectionRoutes 

  if(pageInfo!=undefined) {
    sectionRoutes  = pageInfo.Categories.map(c=>{
      return(
        <Route key={c.id} path={c.route} element={<SolutionView categorie={c}/>}/>
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

export default () => <PageProvider><App/></PageProvider>
