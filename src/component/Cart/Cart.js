import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;

    for(const product of cart){
        total = total +  product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    let grandtotal = total + shipping + parseFloat(tax) ;
    return (
        <div className='cart'>
             <h4>Order Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandtotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;