import { Box, Grid } from '@mui/material';
import React from 'react';
import { products } from '../assets/data';

function Products() {
  return (
    <Box
    sx={{
        mt: 4,
    }}
    >
        <Grid container spacing={0}>
            {
                products.map((product) =>{
                    return <Grid
                    key={product.id}
                    item 
                    xs={6} 
                    md={3}
                    >
                        <Box sx={{
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        }}>
                            <img 
                            src={product.image.mobile} 
                            alt={product.name} 
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                            />
                        </Box>
                        <Box sx={{
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        }}>
                            <img 
                            src={product.image.desktop} 
                            alt={product.name} 
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                            />
                        </Box>
                    </Grid>
                })
            }
        </Grid>
    </Box>
  )
}

export default Products;