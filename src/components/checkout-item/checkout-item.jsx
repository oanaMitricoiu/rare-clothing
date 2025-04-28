import { useContext } from "react";
import { CartContext } from "../../contexts/cart"
import {CheckoutItemContainer, ImageContainer, Name, Quantity, Arrow, Value, Price, RemoveButton} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => removeItemFromCart(cartItem)}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => deleteItemFromCart(cartItem)}>&#10005;</RemoveButton>

        </CheckoutItemContainer>
    )
}

export default CheckoutItem;