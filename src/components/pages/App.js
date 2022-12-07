import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import "../../styles/App.scss"
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProductsPage from "./ProductsPage";
import CartProvider from '../products/CartProvider';
import IndividualProductPage from "./IndividualProductPage";

export default function App() {
  return (
    <div className="app">
    
      <Router>
        <div className="navbar">
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/products">Products</NavLink>
          <NavLink className="navlink" to="/cart">Cart</NavLink>
          <NavLink className="navlink" to="/contact">Contact</NavLink>
          <NavLink className="navlink" to="/about">About</NavLink>
        </div>

        <CartProvider>
        <Switch>
          <Route exact path="/" component={HomePage}/>

          (<Route exact path="/products" component={ProductsPage}/>
          <Route path="/products/:id" component={IndividualProductPage}/>)

          <Route path="/contact" component={ContactPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/cart" component={CartPage}/>
        </Switch>
        </CartProvider>
      </Router>
    </div>




  );
}
