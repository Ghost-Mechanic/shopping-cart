import ItemCard from "./ItemCard";
import '../styles/shop-main.css';
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function ShopMain() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);
    const [cart, setCart] = useOutletContext();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                setProducts(json);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            });

    }, []);

    // this function handles items being added to the cart
    function handleAddToCart(id, quantity) {
        if (quantity === 0) {
            return;
        }

        const itemIndex = cart.findIndex((item) => item[0].id === id);

        // only update quantity if item already exists in cart
        if (itemIndex !== -1) {
            const newCart = cart.map((item, index) => 
                index === itemIndex ? { ...item, quantity: item.quantity + quantity > 10 ? 10 : item.quantity + quantity}
                : item
            );
            setCart(newCart);
        }
        else {
            let newItems = products.filter((product) => product.id === id);
            setCart([...cart, {...newItems, quantity: quantity}]);
        }
    }

    return (
        <>
            <main>
                <h1 className="shop-title">Shop</h1>
                <div className="items-container">
                    {!loading && products ? 
                    products.map((item) => <ItemCard key={item.id} item={item} handleAdd={handleAddToCart} />) 
                    : loading ? <div className="loader-container"><div className="loader"></div></div> : null}
                </div>
            </main>
        </>
    )
}

export default ShopMain;