import { useContext } from "react";
import { CartContext } from "../../contexts/cart"
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => deleteItemFromCart(cartItem)}>&#10005;</div>

        </div>
    )
}

export default CheckoutItem;