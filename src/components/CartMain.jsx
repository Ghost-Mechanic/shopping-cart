import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import '../styles/cart-main.css';

function CartMain() {
    const [cart] = useOutletContext();

    const subtotal = cart.reduce((accumulator, cartItem) => 
        accumulator + (cartItem.quantity * cartItem[0].price), 0).toFixed(2);

    const tax = (subtotal * 0.10).toFixed(2);

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
                    {cart.length === 0 ? 
                    <div className="empty-cart">
                        <h1>Looks like your cart is empty!</h1>
                        <h2>Visit our shopping page to find any item you are looking for!</h2>
                    </div>
                    : cart.map((item) => <CartItem key={item[0].id} item={item} />)}
                </div>
                {cart.length !== 0 ? 
                <div className="cart-pricing">
                    <h2>Subtotal: ${subtotal}</h2>
                    <h2>Tax: ${tax}</h2>
                    <h2>Shipping: FREE</h2>
                    <h2>Total: ${(Number(subtotal) + Number(tax)).toFixed(2)}</h2>
                    <button className="checkout">Checkout</button>
                </div> : null}
            </main>
        </>
    )
}

export default CartMain;