import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";


const ItemDetailContainer = () => {

    const [product, setProducts] = useState({})
    const [loading , setLoading] = useState(true)
    const { idProduct } = useParams()  
    
    const getProductById = () =>{
      const docRef = doc(db, "products", idProduct)
      getDoc(docRef)
      .then((dataDb) =>{
        const productDb = {id: dataDb.id, ...dataDb.data()}

        setProducts(productDb)
      })
      .finally(() => {
        setLoading(false)
      })
    }

    useEffect(()=>{

      setLoading(true)
      getProductById()

      
    }, [idProduct]);


  return (  
    <>
        {loading ? (
          <div>Cargando producto...</div> // Aquí podrías usar un spinner animado
          ) : (
         <ItemDetail product={product} />
        )}
    </>  



  )
}

export default ItemDetailContainer
