import {useState , useEffect, useContext} from "react";
import { Link } from "react-router-dom";


// import RenderProducts from "../RenderProducts";
import { CartContext } from "../products/CartProvider";
import MoneyFormatter from "../MoneyFormatter"
import "../../styles/ProductsPage.scss";

export default function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("all")
    const { addProduct, cart, isInCart, findIndex } = useContext(CartContext); 
    const formatter = MoneyFormatter

    useEffect(() => {
        const url = searchTerm === "all" ? "" : `/category/${searchTerm}`

        fetch('https://fakestoreapi.com/products' + url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.map(product => {
                    const exists = cart.find(prod => prod.id === product.id)
                    
                    product.quantity = exists ? exists.quantity : 0
                    return product
                }))
            })
            .catch((err) => console.error("Fetch Products Err: ", err))
    }, [searchTerm]);


    return(
        <div className="products-page">
            <h1 className="header" style={{color:"white", fontSize:70 }}>Products Page</h1>
            <div className="button-container"> 
                <button className="filter-btns" onClick={() => {setSearchTerm("all")}}> All Products</button>
                <button className="filter-btns" onClick={() => {setSearchTerm("men's clothing")}}>Men's Clothing</button>
                <button className="filter-btns" onClick={() => {setSearchTerm("women's clothing")}}>Women's Clothing</button>
                <button className="filter-btns" onClick={() => {setSearchTerm("jewelery")}}>Jewelery</button>
                <button className="filter-btns" onClick={() => {setSearchTerm("electronics")}}>Electronics</button>
            </div>

        <div className="containers-for-all-products">
            {products.map(data => { 
                return (
                <div className="product" key={data.id}>
                    <img src={data.image} alt="product-img" className="product-image"/>
                    
                    <div className="product-description-container">
                        <h2 className="product-price">{formatter(data.price)}</h2>
                        <h4 className="product-name">{data.title}</h4>
                        <h5 className="product-description">{data.description.slice(0, 50) + "..."}</h5>
                        <h5 className="product-category">{data.category}</h5>
                        <h5 className="product-link"><Link to={`/products/${data.id}`}>See more details</Link></h5>
                        <button className="add-to-cart-btn" onClick={() => addProduct(data)}>Add to Cart</button>
                    </div>
                </div>)})}
            </div>
        </div>
    )
}


