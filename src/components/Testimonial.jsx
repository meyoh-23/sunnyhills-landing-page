import { Box, Typography } from '@mui/material'
import React from 'react'
import TestimonialCard from './utils/TestimonialCard'
import { testimonials } from '../assets/data'

function Testimonial() {
  return (
    <Box sx={{
      mt: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 5,
    }}>
      <Typography
      variant='h4'
      sx={{
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "'Fraunces', serif",
        color: "hsl(210, 4%, 67%)",
        fontWeight: "900",
      }}
      >
        Client testimonials
      </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        gap: 4,
      }}>
        {
          testimonials.map((item) => {
            return <TestimonialCard
            key={item.id}
            comment={item.comment}
            image={item.image}
            role={item.role}
            name={item.name}
            />
          })
        }
      </Box>
    </Box>
  )
}

export default Testimonial