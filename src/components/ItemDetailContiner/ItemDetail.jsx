
const ItemDetail = ({product}) => {
  return (
    <div className="item-detail" >
      <img src={product.image} alt="" width={300}/>
      <div className="text-detail">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail
