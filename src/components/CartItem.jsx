import '../styles/cart-item.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function CartItem({ item }) {
    const [numItems, setNumItems] = useState(item.quantity);
    const [cart, setCart] = useOutletContext();

    // change the cart with the new quantity each time numItems is changed
    const updateQuantity = (newQuantity) => {
        if (newQuantity < 0 || newQuantity > 10) {
            return;
        }

        setNumItems(newQuantity);

        const newCart = cart.map((cartItem) =>
            cartItem[0].id === item[0].id ? {...cartItem, quantity: newQuantity} : cartItem);
        
        if (newQuantity === 0) {
            setCart(cart.filter((cartItem) => cartItem[0].id !== item[0].id));
        }
        else {
            setCart(newCart);
        }
    }

    return (
        <>
            <div className="cart-item-container">
                <h1 className="cart-item-title">{item[0].title}</h1>
                <img className="cart-item-image" src={item[0].image} alt="" />
                <h3 className="cart-item-price">${Number(item[0].price).toFixed(2)}</h3>
                <div className="quantity">
                    <button className="cart-item-button" onClick={() => updateQuantity(numItems - 1)}>-</button>
                    <input type="number" value={numItems} min="0" max="10" disabled={true} />
                    <button className="cart-item-button" onClick={() => updateQuantity(numItems + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => updateQuantity(0)}>Remove from cart</button>
            </div>
        </>
    )
}

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem;