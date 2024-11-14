import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./itemDetail.scss"


const ItemDetail = ({product}) => {

  const [currentImage, setCurrentImage] = useState(product.images[0])
  const refimages = product.images.filter((images)=> images !== currentImage)
  const addProduct = (count) => {

    const productCart= {...product, quantity: count}

  }

  return (
    <div className="item-detail" >

      <div className="images-item-detail">

        <div className="secondary-image">
          {
            refimages.map((images)=>(
              <img src={images} key={images} className="size-secondary-img" onClick={ ()=> setCurrentImage(images)}/>
            ))
          }

        </div>

        <div className="main-image">

          <img src={currentImage} className="size-main-img"/>

        </div>

      </div>

      <div className="text-detail">

        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: {product.price}</p>
        <ItemCount stock= {product.stock} addProduct={addProduct}/>

      </div>

    </div>
  )
}

export default ItemDetail
