// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './Dashboard.css';
import Skeleton from './Skeleton';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { data: productList, loading, error } = useFetch('/dashboard');

  useEffect(() => {
    if (productList) {
      setProducts(productList);
    }
  }, [productList]);

  useEffect(() => {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach((row, index) => {
      row.style.animationDelay = `${index * 0.1}s`; // Delay each row animation
      row.classList.add('wave-animation');
    });
  }, [products, searchQuery]);

  const handleSort = (field) => {
    const isAscending = sortedField === field && sortDirection === 'asc';
    const direction = isAscending ? 'desc' : 'asc';
    const sortedProducts = [...products].sort((a, b) => {
      if (field === 'id') {
        return parseInt(a[field]) - parseInt(b[field]);
      } else {
        if (a[field] < b[field]) return isAscending ? 1 : -1;
        if (a[field] > b[field]) return isAscending ? -1 : 1;
        return 0;
      }
    });

    setProducts(sortedProducts);
    setSortedField(field);
    setSortDirection(direction);
  };

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
            <th 
              onClick={() => handleSort('id')} 
              className={sortedField === 'id' ? (sortDirection === 'asc' ? 'sort-asc' : 'sort-desc') : ''}
            >
              ID
            </th>
            <th 
              onClick={() => handleSort('selling_price')} 
              className={sortedField === 'selling_price' ? (sortDirection === 'asc' ? 'sort-asc' : 'sort-desc') : ''}
            >
              Selling Price
            </th>
            <th 
              onClick={() => handleSort('name')} 
              className={sortedField === 'name' ? (sortDirection === 'asc' ? 'sort-asc' : 'sort-desc') : ''}
            >
              Name
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id} style={{ animationDelay: `${index * 0.1}s` }} className="wave-animation">
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
