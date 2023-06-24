import {BrowserRouter,Routes,Route} from 'react-router-dom'

//Informacion de la pagina
import { PageProvider,usePageContext} from './contexts/page_context'

//Importacion de vistas
import Landing from './views/Landing'
import SolutionView from './views/SolutionView'
import Loading from './views/Loading'
import { useState} from 'react'


function App() {
  const {getSolution,getCategories,charged,setCharged} = usePageContext()


  const [categories,setCategories] = useState(undefined)
  
  const setData = async() => {
    let a = await getCategories()
    for(let b of a){
      b.solution = await getSolution(b.id_solution)
    }
    setCategories(a)
  }

  /*Identificador de dispositivo*/
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    global.naveType="movile"
  } else {
    global.naveType="computer"
  }
  
  let categoriesRoutes 

  if(!categories){
    setData()
    return <Loading/>
  }
  else if(categories){
    categoriesRoutes  = categories.map((c)=>{
        return(
          <Route key={c.id} path={c.solution.route+'/'+c.id} element={<SolutionView category={c} title={c.solution.tittle_s} description={c.solution.description_s}/>}/>
        )
    })

    return (
      <>
        <BrowserRouter basename={window.location.pathname || ''}>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/test"  element={<SolutionView category={{id_category:1}} title={'salfjalkjfd'}/>}/>
            {categoriesRoutes}
          </Routes>
        </BrowserRouter>
      </>
    )
  }
  


}

export default () => {
  return<PageProvider><App/></PageProvider>
}
