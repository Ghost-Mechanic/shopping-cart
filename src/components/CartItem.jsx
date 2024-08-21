import '../styles/cart-item.css';
import PropTypes from 'prop-types';

function CartItem({ item, handleDelete }) {
    return (
        <>
            <div className="cart-item-container">
                <h1 className="cart-item-title">{item[0].title}</h1>
                <img className="cart-item-image" src={item[0].image} alt="" />
                <h3 className="cart-item-price">${Number(item[0].price).toFixed(2)}</h3>
                <div className="quantity">
                    <button className="cart-item-button">-</button>
                    <input type="number" value={item.quantity} min="0" max="10" />
                    <button className="cart-item-button">+</button>
                </div>
                <button className="remove-button" onClick={() => handleDelete(item[0].id)}>Remove from cart</button>
            </div>
        </>
    )
}

CartItem.propTypes = {
    item: PropTypes.array,
    handleDelete: PropTypes.func,
};

export default CartItem;