import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "./cart.scss"

const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if (cart.length === 0) {
        return(
            <div className="empty-cart">
                <div className="text-empty">
                    <h2>No hay productos en el carrito</h2>          
                    <Link to= "/"><button>Volver al inicio</button></Link>
                </div>
                <div className="img-empty">
                    <img src="/empty-cart.svg" alt="" />
                </div>
            </div>
        )
    }

    return (
        <>

        <div className="title-cart">
            <h2>Carrito</h2>
            <div className="line-cart"></div>
        </div>



        <div className="cart">

            <div className="buys">
                <div className="product-detail">
                    <p className="reference">Nombre</p>
                    <p>Cantidad</p>
                    <p>Precio unitario</p>
                    <p>Precio parcial</p>
                    <p>Eliminar</p>
                </div>
                <div className="line-product"></div>

            {
                cart.map((productCart) => (
                    
                    <div key={productCart.id} className="inf-product">

                        <div className="name-product">
                            <img src={productCart.imagecover} alt="" />
                            <p>{productCart.name}</p>
                        </div>
                        <p>{productCart.quantity}</p>
                        <p>${productCart.price}</p>
                        <p>${productCart.quantity * productCart.price}</p>
                        <MdOutlineDeleteOutline onClick={()=> deleteProductById (productCart.id)} className="icon"/>
                        

                    </div>
                ))
            }

            </div>

            <div className="total-price">
                <h3>Detalle de la compra</h3>
                <p>Precio total: {totalPrice()}</p>
                <Link to="/checkout"><button>Finalizar compra</button></Link>
                <button onClick={deleteCart}>Vaciar carrito</button>
            </div>
          
        </div>
    
        </>

    )
}

export default Cart
