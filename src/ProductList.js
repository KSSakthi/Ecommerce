import React from "react";
import "./css/ProductList.css"; // Import your CSS file

function ProductList({ inventory, cart, setCart, setInventory }) {
  const handleAddToCart = (product) => {
    if (product.quantity > 0) {
      const updatedCart = [...cart];
      const updatedInventory = [...inventory];

      // Find the product in the cart
      const cartProductIndex = updatedCart.findIndex(
        (item) => item.name === product.name
      );

      if (cartProductIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        updatedCart[cartProductIndex].cartQuantity += 1;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        updatedCart.push({ ...product, cartQuantity: 1 });
      }

      // Decrement the product's quantity in the inventory
      const inventoryProductIndex = updatedInventory.findIndex(
        (p) => p.name === product.name
      );
      if (inventoryProductIndex !== -1) {
        updatedInventory[inventoryProductIndex].quantity -= 1;
      }

      setCart(updatedCart);
      setInventory(updatedInventory);
    }
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-cards">
        {inventory.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-info">
              <p>{product.name}</p>
              <p>In Stock: {product.quantity}</p>
              <p>Price: INR {product.price}</p>
            </div>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
