import '../styles/cart-item.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function CartItem({ item }) {
    const [numItems, setNumItems] = useState(item.quantity);
    const [cart, setCart] = useOutletContext();

    // change the cart with the new quantity each time numItems is changed
    useEffect(() => {
        let newNumItems = Number(numItems);

        const newCart = cart.map((cartItem) => 
            cartItem[0].id === item[0].id ? {...cartItem, quantity: newNumItems} : cartItem);

        if (newNumItems === 0) {
            setCart(cart.filter((cartItem) => cartItem[0].id !== item[0].id));
        }
        else {
            setCart(newCart);
        }
    }, [numItems, cart, item, setCart]);

    return (
        <>
            <div className="cart-item-container">
                <h1 className="cart-item-title">{item[0].title}</h1>
                <img className="cart-item-image" src={item[0].image} alt="" />
                <h3 className="cart-item-price">${Number(item[0].price).toFixed(2)}</h3>
                <div className="quantity">
                    <button className="cart-item-button" onClick={() => numItems > 0 && numItems <= 10 ? setNumItems(Number(numItems) - 1) : null}>-</button>
                    <input type="number" value={numItems} min="0" max="10" disabled="true" />
                    <button className="cart-item-button" onClick={() => numItems < 10 && numItems >= 0 ? setNumItems(Number(numItems) + 1) : null}>+</button>
                </div>
                <button className="remove-button" onClick={() => setNumItems(0)}>Remove from cart</button>
            </div>
        </>
    )
}

CartItem.propTypes = {
    item: PropTypes.array,
};

export default CartItem;