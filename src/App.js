import React, { useState } from "react";
import "./styles.css";
import Inventory from "./Inventory";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [view, setView] = useState("products");
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  const switchView = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => switchView("products")}>Products</button>
        <button onClick={() => switchView("inventory")}>Inventory</button>
      </div>
      <div className="columns">
        <div className="column">
          {view === "products" && (
            <ProductList
              inventory={inventory}
              cart={cart}
              setCart={setCart}
              setInventory={setInventory}
            />
          )}
          {view === "inventory" && (
            <Inventory inventory={inventory} setInventory={setInventory} />
          )}
        </div>
        <div className="column">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
