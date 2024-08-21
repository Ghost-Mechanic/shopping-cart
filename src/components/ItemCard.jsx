import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/item-card.css';

function ItemCard({ item, handleAdd }) {
    const [numItems, setNumItems] = useState(0);

    function handleChangeNumItems(e) {
        setNumItems(e.target.value);
    }

    // handle invalid number inputs, including out of bounds and decimals
    function handleBlur() {
        if (numItems > 10) {
            setNumItems(10);
        }
        else if (numItems < 0 || numItems === '') {
            setNumItems(0);
        }
        else if (!Number.isInteger(numItems)) {
            setNumItems(Math.floor(numItems));
        }
    }

    return (
        <div className="item-card" tabIndex="0">
            <h1 className="card-title">{item.title}</h1>
            <img className="item-image" src={item.image} alt="" />
            <h3 className="price">${Number(item.price).toFixed(2)}</h3>
            <div className="add-container">
                <div className="add">
                    <button className="item-button" onClick={() => numItems > 0 && numItems <= 10 ? setNumItems(Number(numItems) - 1) : null}>-</button>
                    <input type="number" value={numItems} min="0" max="10" onChange={(e) => handleChangeNumItems(e)} onBlur={handleBlur} />
                    <button className="item-button" onClick={() => numItems < 10 && numItems >= 0 ? setNumItems(Number(numItems) + 1) : null}>+</button>
                </div>
                <button className="add-button" onClick={() => handleAdd(item.id, numItems)}>Add to cart</button>
            </div>
        </div>
    )
}

ItemCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    handleAdd: PropTypes.func.isRequired,
};

export default ItemCard;