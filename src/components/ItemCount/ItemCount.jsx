import { useState } from "react"
import "./itemCount.scss"

const ItemCount = ({stock, addProduct}) => {

const [count, setCount] = useState(1)

const handleClickRest = () => {
    if (count > 1){
        setCount(count - 1)
    }
}

const handleClickAdd = () =>{
    if ( count < stock){
        setCount(count + 1)
    }
}

  return (
    <div className="item-count">
        <div className="count">
            <button onClick={handleClickRest}>-</button>
            <p>{count}</p>
            <button onClick={handleClickAdd}>+</button>
        </div>

        <div className="button-add">

            <button onClick={()=>addProduct(count)}>Agregar al carrito</button>

        </div>
      
    </div>
  )
}

export default ItemCount
