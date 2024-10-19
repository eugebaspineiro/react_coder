import "./itemlistcontainer.scss"
import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="item">
        <img src={product.image} width={300} alt="" />
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>

        <Link to={"/detail/" + product.id}> Ver detalles </Link>
    </div>
  )
}

export default Item
