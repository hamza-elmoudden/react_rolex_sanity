import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import { Proudacte } from './Page/Proudacte';
import { Contacte } from './Page/Contacte';
import { ProudacetList } from './Page/ProudacetList';


function App() {
  return (
    <>
   <Routes>   
        <Route path='/' element={<Home/>} />
        <Route path='/Proudacte/:idprod' element={<Proudacte/>}/>
        <Route path='/Contacte' element={<Contacte/>}/>
        <Route path='/Products' element={<ProudacetList/>}/>
    </Routes>
    </>
  );
}

export default App;
