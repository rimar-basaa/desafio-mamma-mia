
import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import ProviderAPI from './context/ContextApi';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pizza from './views/Pizza';
import Carrito from './views/Carrito';
import NotFound from './views/NotFound';

function App() {

  return (
    <ProviderAPI>
        <Navbar />
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='*' element={<NotFound />} />
        </Routes>                
    </ProviderAPI>
  );
};

export default App;