import "./itemlistcontainer.scss"

const Item = ({product}) => {
  return (
    <div className="item">
        <img src={product.image} width={300} alt="" />
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
    </div>
  )
}

export default Item
