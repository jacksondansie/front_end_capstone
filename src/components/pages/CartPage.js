import { useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../products/CartProvider";
import MoneyFormatter from "../MoneyFormatter"
import "../../styles/CartPage.scss"

export default function CartPage(){
    const { cart, clearCart } = useContext(CartContext); 
    const formatter = MoneyFormatter

    // useEffect(() => {console.log(cartTotal)}, [])

    function cartTotal(){
        const totals = [];
        if (cart.length > 0)  {
        cart.forEach((product) => {
            totals.push(product[0].price * product[1].quantity)
        }) 
            return totals.reduce((prev, current) => prev + current, 0)
        }
        return false
    }

    return(
        <div className="cart-page-container">
            <div className="header">
                <h1>Your Cart</h1>
            </div>

            <div className="users-cart">
                {cart.map(data => { 
                    return (
                    <div key={data[0].id}>
                        <div className="individual-products"> 
                            <img src={data[0].image} alt="product-img" className="product-image"/>

                            <div className="product-description-container">
                                <h5 className="product-name">{data[0].title}</h5>
                                <h5 className="product-description">{data[0].description}</h5>
                                <h5 className="product-category">{data[0].category}</h5>
                                <h5><Link to={`/products/${data[0].id}`}>See more details</Link></h5>
                            </div>

                            <div>
                                <h2>Quantity: {data[1].quantity}</h2>
                                <h2 className="product-price">{formatter(data[0].price)}</h2>
                            </div>
                        </div>
                    </div>)})}
                </div>
                    <h1 className="header">Your Total: {formatter(cartTotal())}</h1>
                    <button className="empty-btn" onClick={() => clearCart()}>Empty Cart</button>
            </div>)}