import React, { useState, useMemo } from 'react';
import { postRequest } from '../axios';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Modal, TextField, Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import useApiRequest from './useApiRequest';

const ProductListingPage = () => {

  const { data: products, loading, error, refetch } = useApiRequest('/products');
  const [open, setOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
		name: '',
		description: '',
		allergenInfo: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
		const { name, value } = e.target;
		setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async() => {
		try {
			await postRequest('/products', newProduct);
			refetch();
			handleClose();
		} catch(error) {
			console.error('Error adding product: ', error);
		}
  };

	const sortedProducts = useMemo(() => {
		return products ? [...products].sort((a, b) => a.selling_price - b.selling_price) : [];
	}, [products]);

  return (
		<div>
      <Typography variant="h4">Product Listing</Typography>
			
			
			<Grid container spacing={3}>
			{loading ? (
				Array.from(new Array(9)).map((_, index) => (
				<Grid item xs={12} sm={6} md={4} key={index}>
					<Skeleton variant="rect" width="100%" height={150} />
				</Grid>
				))
			) : error ? (
				<Typography>{error}</Typography>
			) : (
				sortedProducts.map(product => (
				<Grid item xs={12} sm={6} md={4} key={product.id}>
					<Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
					<Card>
						<CardContent>
						<Typography variant="h6">{product.name}</Typography>
						<Typography>{product.description}</Typography>
						<Typography>Rs.{product.selling_price}</Typography>
						</CardContent>
					</Card>
					</Link>
				</Grid>
				))
			)}
			</Grid>
            <Button variant="contained" color="primary" onClick={handleOpen}>
				Add Product
			</Button>
            <Modal open={open} onClose={handleClose}>
			<div style={{ padding: 20, backgroundColor: 'white', margin: 'auto', marginTop: '10%', width: '50%' }}>
				<Box component="img" width="200px" src={newProduct.productImage}/>
				<TextField
				label="Product Name"
				name="name"
				value={newProduct.name}
				onChange={handleChange}
				fullWidth
				margin="normal"
				/>
			
				<TextField
				label="Product Allergen Info"
				name="allergenInfo"
				value={newProduct.allergenInfo}
				onChange={handleChange}
				fullWidth
				margin="normal"
				/>
				<Button variant="contained" color="primary" onClick={handleAddProduct}>
				Add
				</Button>
			</div>
			</Modal>
		</div>
  );
};

export default ProductListingPage;