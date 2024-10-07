import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {


  return (
    <div>
      <NavBar />
      <div className='banner-img'>
        < ItemListContainer greeting= {"La belleza de lo esencial"} />
      </div>
    </div>
  )
}

export default App
