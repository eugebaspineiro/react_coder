import "./itemlistcontainer.scss"
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
            <div>
                {
                    products.map((product)=>(
                        <div>
                            <img src={product.image} width={300} alt="" />
                            <h2>{product.name}</h2>
                            <p>Precio: ${product.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemListContainer 