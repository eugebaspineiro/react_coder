
const ItemDetail = ({product}) => {
  return (
    <div >
      <img src={product.image} alt="" width={300}/>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail
