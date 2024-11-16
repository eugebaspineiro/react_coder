import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    const queantity = totalQuantity()


    return(
        <Link to= "/cart" className="cart-widget">
            <MdOutlineShoppingCart />
            <p className={ queantity === 0 ? "empty-cart" : "cart-text"}>{queantity >= 1 && queantity}</p>
        </Link>
    )
}

export default CartWidget