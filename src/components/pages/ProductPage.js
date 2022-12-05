import {useEffect, useState} from "react";
import "../../styles/ProductPage.scss"

export default function IndividualProductPage(props) {
    const [productDetails, setProductDetails] = useState({})

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
        .then((res) => res.json())
        .then((data) => setProductDetails(data))
        .catch((err) => console.error("Fetch Individual Product Err: ", err))
    }, []);

    return(
        <div className="individual-product-page"> 
            <h1>Individual Product Details</h1>
            <div className="product">
                <img src={productDetails.image} alt="product-img" className="product-image"/>
                <div className="product-description-container">
                    <h5 className="product-name">{productDetails.title}</h5>
                    <h5 className="product-price">{formatter.format(productDetails.price)}</h5>
                    <h5 className="product-description">{productDetails.description}</h5>
                    <h5 className="product-category">{productDetails.category}</h5>
                    <button>Add to Cart</button>
                </div>
            </div>;
        </div>
    )
}