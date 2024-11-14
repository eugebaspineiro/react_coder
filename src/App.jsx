import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContiner/ItemDetailContainer'
import Banner from './components/banner/Banner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div>
      
      <BrowserRouter>
        <NavBar />
        

        <Routes>

          <Route path='/' element={< ItemListContainer greeting= {"La belleza de lo esencial"}/> } />
          <Route path='/category/:idCategory' element={< ItemListContainer greeting= {"La belleza de lo esencial"}/> }/>
          <Route path='/detail/:idProduct' element={ < ItemDetailContainer />} />


        </Routes>
        
        </BrowserRouter>
     
    </div>
  )
}

export default App
