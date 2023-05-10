import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './views/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login bg_img={'./resources/img/cabinet-3283536_1280.jpg'}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
