import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct ]= useState([]);
    const [cart, setCart] = useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    const handleAddToCart = (product)=>{
        //cart push by array[..array, newarrey]
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product=> <Product
                    handleAddToCart={handleAddToCart}
                    product={product}
                     key={product.id}
                     ></Product>)
            }
            </div>
            <div className="cart-container">
           <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;