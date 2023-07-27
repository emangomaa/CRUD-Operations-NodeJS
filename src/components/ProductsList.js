import React from "react";
import { Link } from "react-router-dom";
export default function ProductsList({
  products,
  deleteProduct,
  getCurrentProduct,
}) {
  const handelDelete = (id) => {
    deleteProduct(id);
  };
  const handelUpdate = (id) => {
    getCurrentProduct(id);
  };

  return (
    <div className="table">
      <table className="table table-hover w-75 m-auto mt-lg-5 text-center">
        <thead>
          <tr className="">
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={5}>
                <h2>Products List Empty!</h2>
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handelDelete(product.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to="/addform"
                    className="btn btn-warning mx-1"
                    onClick={() => handelUpdate(product.id)}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
