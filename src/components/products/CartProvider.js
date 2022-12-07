import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart((c) => [...c, product]);
  }

  // function removeProduct(product) {
  //   setCart((c) => [...c, product]);
  // }
  
  function clearCart() {
    if (window.confirm("Are you sure you want to remove your cart items?")) {
      setCart([]);
    }
  }
  // useEffect(() => {console.log("Cart:", cart)},[cart])

  const cartState = {
    cart,
    addProduct,
    clearCart
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}