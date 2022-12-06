import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart((c) => [...c, product]);
  }

  function clearCart() {
    if (window.confirm("Are you sure you want to remove your cart items?")) {
      setCart([]);
    }
  }

  const cartState = {
    cart,
    addProduct,
    clearCart
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}