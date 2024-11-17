import NavBar from './components/NavBar/NavBar'
import FoterApp from './components/footer/FoterApp'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContiner/ItemDetailContainer'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'
import Banner from './components/banner/Banner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div>
      
      <BrowserRouter>

        <CartProvider>

          <NavBar />  
          <ToastContainer/>      

          <Routes>

            <Route path='/' element={< ItemListContainer greeting= {"La belleza de lo esencial"}/> } />
            <Route path='/category/:idCategory' element={< ItemListContainer greeting= {"La belleza de lo esencial"}/> }/>
            <Route path='/detail/:idProduct' element={ < ItemDetailContainer />} />
            <Route path='/cart' element= { <Cart/> } />
            <Route path='/checkout' element= { <Checkout/> }/>

          </Routes>

          </CartProvider>

          < FoterApp />

        
        </BrowserRouter>

     
    </div>
  )
}

export default App
