import '../styles/item-card.css';

function ItemCard({ item }) {

    return (
        <div className="item-card" tabIndex="0">
            <h1 className="card-title">Mens Casual Premium Slim Fit T-Shirts </h1>
            <img className="item-image" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            <h3 className="price">$22.30</h3>
            <div className="add">
                <button className="item-button">-</button>
                <input type="number" value="0" min="0" max="10" />
                <button className="item-button">+</button>
            </div>
            <button className="add-button">Add to cart</button>
        </div>
    )
}

export default ItemCard;