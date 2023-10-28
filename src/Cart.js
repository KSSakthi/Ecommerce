import React from "react";
import "./css/Cart.css"; // Import your CSS file

function Cart({ cart, setCart }) {
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.name !== product.name);
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.cartQuantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <div className="cart-item-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">Price: INR {product.price}</p>
            <p className="product-quantity">Quantity: {product.cartQuantity}</p>
          </div>
          <span
            className="cart-item-remove"
            onClick={() => removeFromCart(product)}
          >
            Remove
          </span>
        </div>
      ))}
      <div className="cart-total">Total: INR {calculateTotalPrice()}</div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default Cart;
