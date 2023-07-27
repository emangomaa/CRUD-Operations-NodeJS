import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function AddForm({
  addProduct,
  currentProduct,
  onUpdateProduct,
  flag,
  toggleFlag,
}) {
  let [productName, setProductName] = useState(flag ? currentProduct.name : "");
  let [productPrice, setProductPrice] = useState(
    flag ? currentProduct.price : ""
  );
  let [productDesc, setProductDesc] = useState(
    flag ? currentProduct.description : ""
  );

  function handleAddProduct(e) {
    e.preventDefault();
    let product = {
      name: productName,
      description: productDesc,
      price: productPrice,
    };
    addProduct(product);
    setProductName("");
    setProductPrice("");
    setProductDesc("");
  }
  function handleUpdate(e) {
    e.preventDefault();
    let product = {
      id: currentProduct.id,
      name: productName,
      description: productDesc,
      price: productPrice,
    };
    onUpdateProduct(product);
    toggleFlag(!flag);
    setProductName("");
    setProductPrice("");
    setProductDesc("");
  }

  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="product price"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        />
        <textarea
          type="text"
          placeholder="description"
          value={productDesc}
          rows={4}
          onChange={(e) => setProductDesc(e.target.value)}
        ></textarea>

        {flag ? (
          <button onClick={handleUpdate} className="btn btn-warning w-25">
            Update
          </button>
        ) : (
          <button onClick={handleAddProduct} className="btn btn-primary w-25">
            Add
          </button>
        )}
      </form>
      <Link className="btn btn-info w-25 m-auto" to="/products">
        Back To Products
      </Link>
    </div>
  );
}
