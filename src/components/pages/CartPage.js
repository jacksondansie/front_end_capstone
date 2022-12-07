import { useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../products/CartProvider";
import MoneyFormatter from "../MoneyFormatter"
import "../../styles/CartPage.scss"

export default function CartPage(){
    const { cart, clearCart } = useContext(CartContext); 
    const [cartTotal, setCartTotal] = useState([])
    const formatter = MoneyFormatter

    return(
        <div className="page-container">
            <div>
                <h1>Your Cart</h1>
            </div>

            <div className="users-cart">
                {cart.map(data => { 
                    return (
                    <div key={data.id}>
                        <div className="individual-products"> 
                            <img src={data.image} alt="product-img" className="product-image"/>

                            <div className="product-description-container">
                                <h5 className="product-name">{data.title}</h5>
                                <h5 className="product-description">{data.description}</h5>
                                <h5 className="product-category">{data.category}</h5>
                                <h5><Link to={`/products/${data.id}`}>See more details</Link></h5>
                            </div>

                            <div>
                                <h5 className="product-price">{formatter(data.price)}</h5>
                                <button>X</button>
                            </div>
                        </div>
                    </div>)})}
                    <h1>{}</h1>
                    <button onClick={() => clearCart()}>Empty Cart</button>
                </div>
            </div>)}