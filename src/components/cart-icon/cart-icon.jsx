import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import "./cart-icon.scss";

const CartIcon = () => {
    const{isCartOpen, setIsCartOpen, cartCount}= useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    
    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            {/* <ShoppingIcon className="shopping-icon"/> */}
            <img width="24" height="24" src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;