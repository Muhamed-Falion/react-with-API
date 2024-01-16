
import './App.css';
import Home from './Component/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Details1 from './Component/Pages/details1';
import Det1 from './Component/Pages/Det1';
import Det2 from './Component/Pages/Det2';
import Det3 from './Component/Pages/Det3';
import Det4 from './Component/Pages/Det4';
import Det5 from './Component/Pages/Det5';
import Det6 from './Component/Pages/Det6';
import Det7 from './Component/Pages/Det7';
import Det8 from './Component/Pages/Det8';
function App() {
  return (
    <>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/det1' element={<Det1/>}/>
      <Route path='/det2' element={<Det2/>}/>
      <Route path='/det3' element={<Det3/>}/>
      <Route path='/det4' element={<Det4/>}/>
      <Route path='/det5' element={<Det5/>}/>
      <Route path='/det6' element={<Det6/>}/>
      <Route path='/det7' element={<Det7/>}/>
      <Route path='/det8' element={<Det8/>}/>
      </Routes>  
     
    </>
  );
}

export default App;
