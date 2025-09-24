import React, { createContext, useState, useEffect } from "react";

// Initial values for context (fallbacks)
const initialData = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
};

// Create context
export const CartContext = createContext(initialData);

const CartContextProvider = ({ children }) => {
  // Load saved data from localStorage
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const storedPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;
  const storedQuantity = JSON.parse(localStorage.getItem("totalQuantity")) || 0;

  // State
  const [cart, setCart] = useState(storedCart);
  const [totalPrice, setTotalPrice] = useState(storedPrice);
  const [totalQuantity, setTotalQuantity] = useState(storedQuantity);

  // Save changes to localStorage whenever cart updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  }, [cart, totalPrice, totalQuantity]);

  // 🔹 Helper: Recalculate totals
  const calculateTotals = (items) => {
    const price = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const quantity = items.reduce((sum, item) => sum + item.quantity, 0);

    setTotalPrice(price);
    setTotalQuantity(quantity);
  };

  // 🔹 Add product
  const addToCart = (product) => {
    let updatedCart;

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      // If product exists, increase its quantity
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    } else {
      // If product is new, add it
      updatedCart = [...cart, { ...product }];
    }

    setCart(updatedCart);
    calculateTotals(updatedCart);
  };

  // 🔹 Remove product
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    calculateTotals(updatedCart);
  };

  // 🔹 Update quantity
  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    calculateTotals(updatedCart);
  };

  // 🔹 Clear cart
  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
    setTotalQuantity(0);

    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("totalQuantity");
  };

  // Context value
  const store = {
    cart,
    totalPrice,
    totalQuantity,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
