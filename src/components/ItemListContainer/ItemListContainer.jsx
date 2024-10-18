import "./itemlistcontainer.scss"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data"
import { useState, useEffect } from "react"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then ((dataProducts)=>{
            setProducts(dataProducts)
        })
        .catch((error)=>{
            console.log(error)
        })
       .finally(()=>{
        console.log("finalizo la promesa")
       })

    }, [])

    
   
   
    return(
        <div>
            <div className="item-list">
            {greeting}
            </div>
            <div className="item-ord">
                < ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer 