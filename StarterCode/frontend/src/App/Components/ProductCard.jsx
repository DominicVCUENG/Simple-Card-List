import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductCard = ({ product, onDelete }) => {
    return (
        <Card sx={{ width: '100%' }}>
            <Box sx={{ position: 'relative' }}>
                <IconButton
                    onClick={() => onDelete(product.id)}
                    sx={{
                        position: 'absolute',
                    }}
                >
                    <DeleteIcon color="error" />
                </IconButton>
                <CardMedia
                    component="img"
                    height="150"
                    image={product.imageUrl}
                    alt={product.name}
                />
            </Box>
            <CardContent>
                <Typography 
                    variant="h6" 
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '10px'
                    }}
                >
                    {product.name}
                </Typography>
                <Typography variant="subtitle1">${product.price}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
