import { useContext } from "react";
import React from "react";
import { CartContext } from "../../../store/cart-context";
import crosss from "../../../assets/X.png";
import classes from "../cart/cart.module.css";

const CartProduct = ({ id, img, title, price, quantity, imgAlt }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const increaseHandler = () => updateQuantity(id, quantity + 1);
  const decreaseHandler = () =>
    updateQuantity(id, quantity > 1 ? quantity - 1 : 1);

  return (
    <tr className={classes.productRow}>
      {/* Product Column */}
      <td>
        <div className={classes.product}>
          <img className={classes.productImg} src={img} alt={imgAlt} />
          <h3 className={classes.title}>{title}</h3>
        </div>
      </td>

      {/* Price Column */}
      <td>
        <p className={classes.price}>{price}$</p>
      </td>

      {/* Total Column */}
      <td>
        <p className={classes.price}>{price * quantity}$</p>
      </td>

      {/* Quantity Column */}
      <td>
        <div className={classes.quantityBox}>
          <button onClick={decreaseHandler}>--</button>
          <p className={classes.price}>{quantity}</p>
          <button onClick={increaseHandler}>++</button>
        </div>
      </td>

      {/* Remove Column */}
      <td>
        <button
          className={classes.removeBtn}
          onClick={() => removeFromCart(id)}
        >
          <img src={crosss} alt="Remove" />
        </button>
      </td>
     
    </tr>
  );
};

export default CartProduct;
