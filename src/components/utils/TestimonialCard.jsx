import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
function TestimonialCard(props) {
  return (
    <Box 
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        my: 2,
        mx: 2.25
    }}
    >
        <Box sx={{
            mx: "auto"
        }}>
            <Avatar src={props.image}/>
        </Box>
        <Typography 
        variant='p'
        sx={{
            textAlign: "center",
        }}>
            { props.comment }
        </Typography>
        <Typography sx={{
            textAlign: "center"
        }}>
            { props.name }
        </Typography>
        <Typography sx={{
            textAlign: "center"
        }}>
            { props.role }
        </Typography>
    </Box>
  )
}

export default TestimonialCard;