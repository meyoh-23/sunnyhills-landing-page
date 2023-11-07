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
    }}>
        <Typography sx={{
            textAlign: "center"
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
                        textTransform: "capitalize"
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