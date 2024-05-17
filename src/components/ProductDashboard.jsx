import React, { useState, useEffect, useMemo } from "react";
import { getRequest } from "../axios";
import { Link } from "react-router-dom";

const useSortableData = (items, config = { key: "id", direction: "asc" }) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getRequest("/dashboard");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.id.toString().includes(searchQuery) ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const {
    items: sortedProducts,
    requestSort,
    sortConfig,
  } = useSortableData(filteredProducts);

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className="container mt-5">
      <Link className="link" to="/">
        home
      </Link>
      <h1 className="mb-4">Product Dashboard</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by ID or Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table table-bordered">
          <thead
            className="thead-light"
            style={{
              background: "linear-gradient(to right, #b8e994, #78e08f)",
            }}
          >
            <tr>
              <th>
                <button
                  className="btn btn-primary"
                  onClick={() => requestSort("id")}
                >
                  {sortConfig.key === "id" && sortConfig.direction === "asc"
                    ? "Original Order"
                    : "Sort by ID"}
                </button>
              </th>
              <th>
                <button
                  className="btn btn-primary"
                  onClick={() => requestSort("name")}
                >
                  {sortConfig.key === "name" && sortConfig.direction === "asc"
                    ? "Regular Order"
                    : "Sort by Name"}
                </button>
              </th>
              <th>
                <button
                  className="btn btn-primary"
                  onClick={() => requestSort("selling_price")}
                >
                  {sortConfig.key === "selling_price" &&
                  sortConfig.direction === "asc"
                    ? "Regular Order"
                    : "Sort by Selling Price"}
                </button>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.selling_price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(product.id)}
                  >
                    Check
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductDashboard;
