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
            fontFamily: "'Barlow', sans-serif",
            fontWeight: "600",
            color: "hsl(232, 10%, 55%)",
            fontSize: "1.125rem"
        }}>
            { props.comment }
        </Typography>
        <Typography
        variant='h5'
        sx={{
            textAlign: "center",
            fontFamily: "'Fraunces', serif",
            fontWeight: "900",
        }}>
            { props.name }
        </Typography>
        <Typography sx={{
            textAlign: "center",
            color: "hsl(210, 4%, 67%)",
            fontFamily: "'Barlow', sans-serif",
            fontWeight: "600"
        }}>
            { props.role }
        </Typography>
    </Box>
  )
}

export default TestimonialCard;