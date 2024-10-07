import { MdOutlineShoppingCart } from "react-icons/md";

const CartWidget = () => {
    return(
        <div className="cart-widget">
            <MdOutlineShoppingCart />
            <p className="cart-text">02</p>
        </div>
    )
}

export default CartWidget