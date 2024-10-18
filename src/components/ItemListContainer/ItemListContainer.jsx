import "./itemlistcontainer.scss"
import { getProducts } from "../../data/data"

const ItemListContainer = ({greeting}) => {
   
    getProducts()
    .then ((respuesta)=>{
        console.log(respuesta)
    })
    .catch((error)=>{
        console.log(error)
    })
   .finally(()=>{
    console.log("finalizo la promesa")
   })
   
   
   
    return(
        <div className="item-list">
            {greeting}
        </div>
    )
}

export default ItemListContainer 