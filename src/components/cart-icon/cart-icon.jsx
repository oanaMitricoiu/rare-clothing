import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import {IconContainer, ItemCount, IconImage} from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const{isCartOpen, setIsCartOpen, cartCount}= useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    
    return (
        <IconContainer onClick={toggleCart}>
            {/* <ShoppingIcon className="shopping-icon"/> */}
            <IconImage src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1"/>
            <ItemCount>{cartCount}</ItemCount>
        </IconContainer>
    )
}

export default CartIcon;