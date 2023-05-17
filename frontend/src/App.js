import {BrowserRouter,Routes,Route} from 'react-router-dom';
import * as React from 'react';
//Importacion de vistas
import Landing from './views/Landing';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
