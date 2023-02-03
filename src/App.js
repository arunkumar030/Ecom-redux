import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Router, Routes} from 'react-router-dom';
import { Products } from './components/Products';
import { Product } from './components/Product';
import { Login } from './components/Login';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Products/:id' element={<Product/>} />
        <Route path='Login' element={<Login/>} />
       
       
     </Routes>
    </>
  );
}

export default App;
