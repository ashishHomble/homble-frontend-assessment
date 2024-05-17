import React, { useState, useEffect, useMemo } from "react";
import { getRequest } from "../axios";

const useSortableData = (
  items,
  config = { key: "id", direction: "asc" }
) => {
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

  const { items: sortedProducts, requestSort, sortConfig } = useSortableData(
    filteredProducts
  );

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <input
        type="text"
        placeholder="Search by ID or Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
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
                  <button onClick={() => removeProduct(product.id)}>
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
