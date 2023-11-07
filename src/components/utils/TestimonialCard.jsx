import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import emily from "./../../assets/images/image-emily.jpg"
function TestimonialCard() {
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
            <Avatar src={emily}/>
        </Box>
        <Typography 
        variant='p'
        sx={{
            textAlign: "center",
        }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium amet rem illum tempore, ipsum molestiae accusamus aliquid sed quas, at vel a nemo.
        </Typography>
        <Typography sx={{
            textAlign: "center"
        }}>
            Emily R.
        </Typography>
        <Typography sx={{
            textAlign: "center"
        }}>
            Marketing director
        </Typography>
    </Box>
  )
}

export default TestimonialCard;