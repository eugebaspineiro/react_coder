import "./itemlistcontainer.scss"
import ItemList from "./ItemList"
// import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const {idCategory} = useParams()
    const [loading, setLoading] = useState(true)

    const getProducts = () => {
        const productsRef = collection ( db, "products" )
        getDocs( productsRef )
        .then((dataDb) => {

            const productsDb = dataDb.docs.map((productDb)=>{
                return {id: productDb.id, ...productDb.data()}

            })

            setProducts(productsDb)          

        })
    }

    const getProductsByCategory = () => {

        const productsRef = collection(db, "products")
        const queryCategories = query(productsRef, where("category", "==", idCategory))
        getDocs(queryCategories)
        .then ( (dataDb) => {
            const productsDb = dataDb.docs.map((productDb) => {
                return {id: productDb.id, ...productDb.data()}

            })

            setProducts(productsDb) 

        })
    }

    useEffect(() => {

        if (idCategory){
            getProductsByCategory()
        } else {
            getProducts()
        }

        


        // setLoading(true)
        

    //     getProducts()
    //     .then ((dataProducts)=>{
    //         if(idCategory){
    //             const filterProducts= dataProducts.filter((product)=> product.category === idCategory)
    //             setProducts(filterProducts)

    //         }else{
    //             setProducts(dataProducts)
    //         }
            
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    //    .finally(()=>{
    //     setLoading(false)
    //    })

    }, [idCategory])



    

    
   
   
    return(
        <div>
            <div className="item-list">
                {greeting}
            </div>
            {
                loading===false ? (
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