import React, { useState, useEffect, useMemo } from "react";
import { getRequest } from "../axios";

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
      direction = "original";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const { items: sortedProducts, requestSort, sortConfig } = useSortableData(
    products
  );

  const handleCheck = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>
                <button onClick={() => requestSort("id")}>
                  {sortConfig.key === "id" && sortConfig.direction === "asc"
                    ? "Original Order"
                    : "Sort by ID"}
                </button>
              </th>
              <th>
                <button onClick={() => requestSort("name")}>
                  {sortConfig.key === "name" && sortConfig.direction === "asc"
                    ? "Regular Order"
                    : "Sort by Name"}
                </button>
              </th>
              <th>
                <button onClick={() => requestSort("selling_price")}>
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
                  <button onClick={() => handleCheck(product.id)}>Check</button>
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
