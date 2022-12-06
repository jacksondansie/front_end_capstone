import {useState , useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../products/CartProvider";
import "../../styles/ProductsPage.scss";

export default function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("all")
    const { addProduct } = useContext(CartContext); 
    const truncateNum = 50

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', });

    useEffect(() => {
        const url = searchTerm === "all" ? "" : `/category/${searchTerm}`

        fetch('https://fakestoreapi.com/products' + url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Fetch Products Err: ", err))
    }, [searchTerm]);
    
    function truncate(text, num){
      return text.slice(0, num) + "..."
    }

    return(
        <div className="products-page">
            <h1>Products Page</h1>
            <div className="button-container"> 
                <button onClick={() => {setSearchTerm("all")}}> All Products</button>
                <button onClick={() => {setSearchTerm("men's clothing")}}>Men's Clothing</button>
                <button onClick={() => {setSearchTerm("women's clothing")}}>Women's Clothing</button>
                <button onClick={() => {setSearchTerm("jewelery")}}>Jewelery</button>
                <button onClick={() => {setSearchTerm("electronics")}}>Electronics</button>
            </div>

        <div className="containers-for-all-products">
            {products.map(data => { 
                return (
                <div className="product" key={data.id}>
                    <img src={data.image} alt="product-img" className="product-image"/>
                    
                    <div className="product-description-container">
                        <h5 className="product-name">{data.title}</h5>
                        <h5 className="product-price">{formatter.format(data.price)}</h5>
                        <h5 className="product-description">{truncate(data.description, truncateNum)}</h5>
                        <h5 className="product-category">{data.category}</h5>
                        <h5><Link to={`/products/${data.id}`}>See more details</Link></h5>
                        <button onClick={() => addProduct(data)}>Add to Cart</button>
                    </div>
                </div>)})}
            </div>
        </div>
    )
}


