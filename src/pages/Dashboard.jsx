// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './Dashboard.css';
import Skeleton from './Skeleton';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { data: productList, loading, error } = useFetch('/dashboard');

  useEffect(() => {
    if (productList) {
      setProducts(productList);
    }
  }, [productList]);

  const handleSort = (field) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (field === 'id') {
        // Convert IDs to numbers for numerical sorting
        return parseInt(a[field]) - parseInt(b[field]);
      } else {
        // For other fields, perform regular string comparison
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      }
    });

    if (sortedField === field) {
        sortedProducts.reverse();
      }
    
      setProducts(sortedProducts);
      setSortedField(field);
    };

    // Toggle sorting direction if already sorted by the same fiel

  const handleCheck = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <input
        type="text"
        placeholder="Search by name or ID"
        value={searchQuery}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID {sortedField === 'id' ? '▲' : '▼'}
            </th>
            <th onClick={() => handleSort('selling_price')}>
              Selling Price {sortedField === 'selling_price' ? '▲' : '▼'}
            </th>
            <th onClick={() => handleSort('name')}>
              Name {sortedField === 'name' ? '▲' : '▼'}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.selling_price}</td>
              <td>{product.name}</td>
              <td>
                <button onClick={() => handleCheck(product.id)}>Check</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
