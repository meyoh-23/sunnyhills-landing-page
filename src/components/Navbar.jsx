import { AppBar, Box, Drawer, Link, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { navItems } from './../assets/data';
const Navbar = () => {
  return (
    <AppBar>
        <Toolbar sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "flex-start",
            py: 2.25,
        }}>
            <Typography>
                    sunnyside
                </Typography>
            <Box sx={{
                display: {
                    xs: "none",
                    md: "flex",
                },
                justifyContent: "space-between",
                gap: 4,
            }}>
                {
                    navItems.map((item) => {
                        const { link, id, title} = item;
                        return <Link
                        key={id}
                        underline='none'
                        href={link}
                        sx={{
                            color: "black",
                        }}
                        >
                        {title}
                        </Link>
                    })
                }
            </Box>
            <Box sx={{
                display: {
                    xs: "flex",
                    md: "none"
                }
            }}>
                <Typography>
                    mobile nav
                </Typography>
            </Box>
            <Drawer>
                for the mobile nav items
            </Drawer>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;