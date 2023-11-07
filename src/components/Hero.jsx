import { Box, Typography, } from '@mui/material';
import React from 'react';
import desktopHero from './../assets/images/desktop/image-header.jpg';
import mobileHero from './../assets/images/mobile/image-header.jpg';
import Navbar from './Navbar';
import arrorIcon from './../assets/images/icon-arrow-down.svg';

function Hero() {
  return (
    <Box
    variant='header'
    sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: {
            xs: `url(${mobileHero})`,
            md: `url(${desktopHero})`
        },
        backgroundPosition: "center ",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pt: "7rem"
    }}
    >
        <Navbar/>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
            position: "relative",
        }}
        >
            <Typography
            variant='h2'
            sx={{
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "'Fraunces', serif",
                fontWeight: "700",
                color: "hsl(0, 0%, 100%)"
            }}
            >
                We are creatives
            </Typography>
            <Box
            sx={{
                alignItems: "center",
                mx: "auto",
                position: "absolute",
                transform: "translateY(200%)"
            }}
            >
                <img src={arrorIcon} alt="arrow" />
            </Box>
        </Box>
    </Box>
  )
}

export default Hero;