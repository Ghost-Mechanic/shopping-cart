import '../styles/header.css';
import cartImage from '../assets/shopping-cart.png';
import { Link } from 'react-router-dom';

function Header() {
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
                            <button className="cart-button">
                                <img className="cart" src={cartImage} alt="Shopping Cart" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;