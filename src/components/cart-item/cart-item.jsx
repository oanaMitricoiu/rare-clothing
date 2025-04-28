import {CartItemContainer, CartImg, ItemDetails, Name} from "./cart-item.styles.jsx";

const CartItem = ({cartItem}) => {
    const{name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer>
            <CartImg src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span className="price">{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;