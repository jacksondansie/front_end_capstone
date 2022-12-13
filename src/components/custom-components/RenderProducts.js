// import { useContext } from "react"
// import { Link } from "react-router-dom";

// import MoneyFormatter from "../MoneyFormatter"
// import { CartContext } from "../products/CartProvider"


// export default function RenderProducts(products) {

//     const addProduct = useContext(CartContext)
//     const formatter = MoneyFormatter

//     const products = products.map(data => { 
//         return (
//         <div className="product" key={data.id}>
//             <img src={data.image} alt="product-img" className="product-image"/>
            
//             <div className="product-description-container">
//                 <h2 className="product-price">{formatter(data.price)}</h2>
//                 <h4 className="product-name">{data.title}</h4>
//                 <h5 className="product-description">{data.description.slice(0, 50) + "..."}</h5>
//                 <h5 className="product-category">{data.category}</h5>
//                 <h5 className="product-link"><Link to={`/products/${data.id}`}>See more details</Link></h5>
//                 <button className="add-to-cart-btn" onClick={() => addProduct(data)}>Add to Cart</button>
//             </div>
//         </div>)})
        

//         return(
//             <div>{products}</div>
//         )



//         }




//     const addProduct = useContext(CartContext); 
//     const formatter = MoneyFormatter

//     return(
//         <div className="containers-for-all-products">
//         {products.map(data => { 
//             return (
//             <div className="product" key={data.id}>
//                 <img src={data.image} alt="product-img" className="product-image"/>
                
//             <div className="product-description-container">
//                 <h2 className="product-price">{formatter(data.price)}</h2>
//                 <h4 className="product-name">{data.title}</h4>
//                 <h5 className="product-description">{data.description.slice(0, 50) + "..."}</h5>
//                 <h5 className="product-category">{data.category}</h5>
//                 <h5 className="product-link"><Link to={`/products/${data.id}`}>See more details</Link></h5>
//                 <button className="add-to-cart-btn" onClick={() => addProduct(data)}>Add to Cart</button>
//             </div>
//         </div>
//         )})}
//         </div>
        
//     )}
