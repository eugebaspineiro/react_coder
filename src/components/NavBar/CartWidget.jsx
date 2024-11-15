import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)


    return(
        <Link to= "/cart" className="cart-widget">
            <MdOutlineShoppingCart />
            <p className="cart-text">{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget