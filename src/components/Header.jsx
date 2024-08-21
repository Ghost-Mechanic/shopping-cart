import '../styles/header.css';
import cartImage from '../assets/shopping-cart.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ cart }) {

    // calculate the number of items in the cart
    let numCartItems = 0;

    cart.map((item) => numCartItems += item.quantity);

    return (
        <>
            <header>
                <h1 className="shop-name">Ghost&apos;s Shop</h1>
                <nav className="navigation-buttons">
                    <ul>
                        <li>
                            <Link to="/">
                                <button className="home-button">Home</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop">
                                <button className="shop-button">Shop</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <button className="cart-button">
                                    <img className="cart" src={cartImage} alt="Shopping Cart" />
                                    {numCartItems > 0 ? <p>{numCartItems}</p> : null}
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

Header.propTypes = {
    cart: PropTypes.array,
};

export default Header;