import '../styles/header.css';
import cartImage from '../assets/shopping-cart.png';

function Header() {
    return (
        <>
            <header>
                <h1 className="shop-name">Ghost&apos;s Shop</h1>
                <nav className="navigation-buttons">
                    <ul>
                        <li>
                            <button className="home-button">Home</button>
                        </li>
                        <li>
                            <button className="shop-button">Shop</button>
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