import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard';


const ProductList = () => {
	const [products, setProducts] = useState([]);

	//implement the get products function
	const fetchProducts = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:5000/api/products');
			const allProducts = response.data;
			setProducts(allProducts.data)
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	}

	//implement the delete function
	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(`http://127.0.0.1:5000/api/products/${id}`);
			if (response.data.success) {
				setProducts(products.filter(product => product.id !== id));
			}
		} catch (error) {
			console.error(`Error deleting ${id}`, error)
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<Container 
			sx={{ 
				padding: '50px 0 50px'
			}}>
			<Typography 
				variant="h3" 
				align="center" 
				sx={{
					fontWeight: 'bold',
					marginBottom: '50px'
				}}
			>
				Simple Card List
			</Typography>
			<Grid 
				container 
				justifyContent="center"
				sx={{
					marginX: 'auto',
					width: '100%',
					maxWidth: 'lg'
				}}
			>
				{products.map(product => (
					<Grid 
						item 
						xs={12} 
						sm={6} 
						md={4} 
						key={product.id}
						sx={{
							padding: '8px',
						}}
					>
						<ProductCard product={product} onDelete={handleDelete} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ProductList;