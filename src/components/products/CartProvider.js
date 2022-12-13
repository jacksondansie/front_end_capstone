import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function isInCart(product) {
    const exists = cart.find(prod => prod.id === product.id)

    return exists ? true : false
  }

  function findProduct(product) {
    if(isInCart(product)) {
      return {
        idx: cart.findIndex(prod => prod.id === product.id),
        item: cart[this.idx]
      }
    }
  }

  //Kray was here lol.
  function addProduct(product) {
    // update qty
    // search for the object in cart
    // if exists in cart
      // remove from cart array
      // add new copy to same index value as before
    // else
      // add to cart
    //setState
    const cartCopy = [...cart] 
    const exists = cartCopy.find(item => item.id === product.id); 
    
    if(exists) {
      const idx = cartCopy.findIndex(prod => prod.id === product.id)
      // exists.qty += 1
      // replace current object with found and updated object
      setCart(cartCopy)
    } else {

    }

    cartCopy.forEach((item, idx) => {
      if (item[0] === product){
        exists = true;
        cartCopy[idx][1].quantity = cartCopy[idx][1].quantity + 1;
      }
    })
    
    if (exists) {
    } else {
      setCart((c) => [...c, [product , {quantity:1}
      ]]);
    }
  }



  // function removeProduct(product) {
  //   setCart((c) => [...c, product]);
  // }
  
  function clearCart() {
    if (window.confirm("Are you sure you want to remove your cart items?")) {
      setCart([]);
    }
  }
  
  useEffect(() => {console.log("Cart:", cart)},[cart])

  const cartState = {
    cart,
    addProduct,
    clearCart,
    isInCart,
    findProduct
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}

