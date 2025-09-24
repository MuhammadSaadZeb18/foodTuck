import { useContext } from "react";
import React from "react";
import { CartContext } from "../../../store/cart-context";
import classes from "../cart/cart.module.css";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart, totalPrice, totalQuantity, clearCart } =
    useContext(CartContext);
  return (
    <div className={classes.cartLayout}>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Total</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartProduct
                  key={item.id}
                  id={item.id}
                  img={item.image}
                  title={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  imgAlt={item.name}
                  total={item.quantity * item.price}
                />
              ))}
            </tbody>
          </table>

          {/* ✅ Grand Total Section */}
          <div className={classes.summaryBox}>
            <div className={classes.summaryRow}>
              <span>Total Items:</span>
              <span className={classes.value}>{totalQuantity}</span>
            </div>
            <div className={classes.summaryRow}>
              <span>Grand Total:</span>
              <span className={classes.value}>${totalPrice}</span>
            </div>
            <button className={classes.clearBtn} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
