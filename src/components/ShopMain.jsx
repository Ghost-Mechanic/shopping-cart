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
                console.log(json);
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

        let newItems = products.filter((product) => product.id === id);
        setCart([...cart, {...newItems, quantity: quantity}]);
        console.log(cart);
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