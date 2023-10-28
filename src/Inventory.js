import React, { useState } from "react";
import "./css/Inventory.css";

function Inventory({ inventory, setInventory }) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddProduct = () => {
    if (productName && quantity > 0 && price > 0) {
      const newProduct = {
        name: productName,
        quantity: quantity,
        price: price
      };
      setInventory([...inventory, newProduct]);
      setProductName("");
      setQuantity(0);
      setPrice(0);
    }
  };

  return (
    <div className="inventory-container">
      <h2>Add Products to Inventory</h2>
      <div className="input-container">
        <label>Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="add-button" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
}

export default Inventory;
