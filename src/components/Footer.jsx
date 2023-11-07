import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { footerLinks, socialLinks } from '../assets/data';

function Footer() {
  return (
    <Box sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        backgroundColor: "hsl(168, 34%, 41%)"
    }}>
        <Typography 
        variant='h3'
        sx={{
            textAlign: "center",
            fontFamily: "'Fraunces', serif",
            color: "hsl(212, 27%, 19%)",
            fontWeight: "900"
        }}>
            sunnyside
        </Typography>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            mx: "auto",
            gap: 4,
        }}>
            {
                footerLinks.map((item) => {
                    return <Link
                    key={item.id}
                    underline='none'
                    href={item.link}
                    sx={{
                        textTransform: "capitalize",
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "1.125rem",
                        color: "hsl(198, 62%, 26%)"
                    }}
                    >
                        {item.title}
                    </Link>
                })
            }
        </Box>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            mx: "auto",
            gap: 4,
        }}>
            {
                socialLinks.map((item) => {
                    return <Link
                    underline='none'
                    key={item.id}
                    href={item.link}
                    >
                        <img src={item.icon} alt="socialmedia pages" />
                    </Link>
                })
            }
        </Box>
    </Box>
  )
}

export default Footer;