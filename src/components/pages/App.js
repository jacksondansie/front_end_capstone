import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import HomePage from "./HomePage";
import CartPage from "./CartPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProductsPage from "./ProductsPage";
import IndividualProductPage from "./ProductPage";

const navlinkStyle = {
  color: "black",
  width: "100vw",
  padding: "20px",
}

function App() {
  return (
    <div className="app">
    
      <Router>
        <NavLink style={navlinkStyle} to="/">Home</NavLink>
        <NavLink style={navlinkStyle} to="/products">Products</NavLink>
        <NavLink style={navlinkStyle} to="/contact">Contact</NavLink>
        <NavLink style={navlinkStyle} to="/about">About</NavLink>
        <NavLink style={navlinkStyle} to="/cart">Cart</NavLink>

        <Switch>
        <Route exact path="/" componenet={HomePage}/>

        (<Route exact path="/products" component={ProductsPage}/>
        <Route path="/products/:id" component={IndividualProductPage}/>)

        <Route path="/contact" component={ContactPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/cart" component={CartPage}/>
        </Switch>

      </Router>
    </div>




  );
}

export default App;
