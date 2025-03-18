import './Cart.css'
import { useState, useEffect } from 'react';

export const Cart = () => {
    
    return (
        <div className="cart-container">
                <h2 className="title">Mi cesta</h2>
            <button className="close-btn">
                <img src="/img/close-icon.png" alt="close-icon" className="close-cart" />
            </button>
            <div className="product-container">
                 <div className="product-details">
                  <h3 className='toy-name'>nombre</h3>
                  <h5 className='toy-price'>precio €</h5>
                </div>
                <div className="quantity-container">
                  <button className="increase">+</button>
                  <p className="quantity">cantidad</p>
                  <button className="decrease">-</button>
                </div>
                <div className="delete-product">
                    <button className="delete-btn">
                        <img src="/img/delete-icon.png" alt="delete-icon" className="delete-icon" />
                    </button>
                </div>
                <h3 className='total'>Total: total€</h3>
            </div>
        </div>
    )
}