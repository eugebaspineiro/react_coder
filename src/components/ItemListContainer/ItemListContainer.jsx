import "./itemlistcontainer.scss"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const {idCategory} = useParams()

    useEffect(() => {
        getProducts()
        .then ((dataProducts)=>{
            if(idCategory){
                const filterProducts= dataProducts.filter((product)=> product.category === idCategory)
                setProducts(filterProducts)

            }else{
                setProducts(dataProducts)
            }
            
        })
        .catch((error)=>{
            console.log(error)
        })
       .finally(()=>{
        console.log("finalizo la promesa")
       })

    }, [idCategory])

    
   
   
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