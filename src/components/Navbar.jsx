import { AppBar, Box, Button, Drawer, Link, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from './../assets/data';

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileMenu = ()=>{
        setMobileNav(!mobileNav);
    }

  return (
    <AppBar
    elevation={0}
    sx={{
        backgroundColor: "transparent"
    }}
    >
        <Toolbar 
        sx={{
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
                <Button
                variant='text'
                size='large'
                sx={{
                    color: "#fff"
                }}
                onClick={toggleMobileMenu}
                >
                    <MenuIcon/>
                </Button>
            </Box>
            <Drawer
            anchor='top'
            open={mobileNav}
            onClose={toggleMobileMenu}
            PaperProps={{
                sx: {
                    width: "95vw",
                    mt: "4rem",
                    mx: "auto",
                    display: {
                        xs: "flex",
                        md: "none",
                    }
                }
            }}
            >
                <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "3rem",
                    py: "3rem",
                }}
                >
                    {
                        navItems.map((item) => {
                            const {link, id, title} = item;
                            return <Link
                            underline='none'
                            key={id}
                            href={link}
                            sx={{
                                color: "black",
                                textAlign: "center",
                            }}
                            >
                                {title}
                            </Link>
                        })
                    }
                </Box>
            </Drawer>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;