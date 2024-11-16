import "./itemlistcontainer.scss"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const {idCategory} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        setLoading(true)

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
        setLoading(false)
       })

    }, [idCategory])

    
   
   
    return(
        <div>
            <div className="item-list">
                {greeting}
            </div>
            {
                loading===true ? (
                    <div>Cargando...</div>
                ) : (
                    <div className="item-ord">
                        < ItemList products={products} />
                    </div>

                )
            }

        </div>
    )
}

export default ItemListContainer 