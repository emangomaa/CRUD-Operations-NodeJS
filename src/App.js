import "./App.css";
import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  let [products, setProducts] = useState([]);
  let [currentProduct, setCurrentProduct] = useState({});
  let [flag, setFlag] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products")
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          setProducts(res.data);
        }
      });
  }, []);
  const AddProduct = (product) => {
    fetch("http://localhost:3000/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          setProducts([...products, res.data]);
        }
      });
  };

  const DeleteProduct = (id) => {
    fetch("http://localhost:3000/api/v1/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          setProducts(products.filter((p) => p.id !== id));
        }
      });
  };

  const GetCurrentProduct = (id) => {
    let cp = products.find((p) => p.id === id);

    setCurrentProduct(cp);
    setFlag(!flag);
  };

  const ToggleFlag = () => {
    setFlag(!flag);
  };
  const UpdateProduct = (product) => {
    fetch("http://localhost:3000/api/v1/products", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: product.id, name: product.name }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          setProducts(
            products.map((p) =>
              p.id === product.id ? { ...p, name: product.name } : p
            )
          );
        }
      });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="title">
        <h1>CRUD Operations with Node JS API</h1>
        <h3>Using React, Express, and Sequelize</h3>
      </div>
      <Routes>
        <Route
          path="/addform"
          element={
            <AddForm
              addProduct={AddProduct}
              currentProduct={currentProduct}
              onUpdateProduct={UpdateProduct}
              flag={flag}
              toggleFlag={ToggleFlag}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsList
              products={products}
              deleteProduct={DeleteProduct}
              getCurrentProduct={GetCurrentProduct}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
