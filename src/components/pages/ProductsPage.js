import {useState , useEffect} from "react";
import { Link } from "react-router-dom";

import "../../styles/ProductsPage.scss";

export default function ProductsPage(){
    const [products, setProducts] = useState([]);
    const truncateNum = 50

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', });

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Fetch Products Err: ", err))
    }, []);

    
    function truncate(text, num){
      return text.slice(0, num) + "..."
    }

    return(
        <div className="products-page">
            <h1>Products Page</h1>
            <form>
                <button>Search</button>
                <input type="text"/>
            </form>

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
                    <button>Add to Cart</button>
                </div>
            </div>)})};

        </div>
    )
}


