import {useContext} from "react";
import { CartContext } from "../../contexts/cart";
import "./product-card.scss";
import Button from "../button/button";

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    
        return (
            <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
    </div>
        )
    
}

export default ProductCard;