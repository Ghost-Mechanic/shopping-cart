import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import '../styles/cart-main.css';

function CartMain() {
    const [cart, setCart] = useOutletContext();

    cart.map((item) => {
        console.log(item[0].id);
        console.log(item[0].title);
        console.log(item.quantity);
    });

    return (
        <>
            <main>
                <h1 className="cart-title">Your Cart</h1>
                <div className="cart-container">
                    {cart.map((item) => <CartItem key={item[0].id} item={item} />)}
                </div>
            </main>
        </>
    )
}

export default CartMain;