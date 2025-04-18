import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import { CartContext } from "../../contexts/cart";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout")
    }
    return (
        <div  className="cart-dropdown-container" >
            <div className="cart-items">
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button buttonType="cart" onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;