import { Box } from '@mui/material';
import React from 'react';
import desktopEgg from './../assets/images/desktop/image-transform.jpg';
import mobileEgg from './../assets/images/mobile/image-transform.jpg';

function CoreValues() {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: "0px"
    }}>
        <Box
        sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            }
        }}
        >
            
        </Box>
    </Box>
  )
}

export default CoreValues;