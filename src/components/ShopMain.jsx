import ItemCard from "./ItemCard";
import '../styles/shop-main.css';
import { useState, useEffect } from "react";

function ShopMain() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                console.log(json);
                setProducts(json);
            })
            .catch((error) => console.log(error));

        setLoading(false);
    }, []);

    return (
        <>
            <main>
                <h1 className="shop-title">Shop</h1>
                <div className="items-container">
                    {!loading && products ? 
                    products.map((item) => <ItemCard key={item.id} item={item} />) : null}
                </div>
            </main>
        </>
    )
}

export default ShopMain;