import { useState } from 'react';
import '../styles/item-card.css';

function ItemCard({ item }) {
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
            <h1 className="card-title">Mens Casual Premium Slim Fit T-Shirts </h1>
            <img className="item-image" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            <h3 className="price">$22.30</h3>
            <div className="add">
                <button className="item-button" onClick={() => numItems > 0 && numItems <= 10 ? setNumItems(Number(numItems) - 1) : null}>-</button>
                <input type="number" value={numItems} min="0" max="10" onChange={(e) => handleChangeNumItems(e)} onBlur={handleBlur} />
                <button className="item-button" onClick={() => numItems < 10 && numItems >= 0 ? setNumItems(Number(numItems) + 1) : null}>+</button>
            </div>
            <button className="add-button">Add to cart</button>
        </div>
    )
}

export default ItemCard;