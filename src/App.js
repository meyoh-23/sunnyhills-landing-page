import { Box, CssBaseline, ThemeProvider, createTheme, styled } from "@mui/material";
/* import Navbar from "./components/Navbar"; */
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import Testimonial from "./components/Testimonial";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {

  const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    }
  },
})

const AppCotainer= styled(Box)({
  overflow: "hidden",
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  margin: "0 auto",
  justifyContent: "center"
})

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box>
        <AppCotainer>
          <Hero/>
          <Box variant='main'>
            <CoreValues/>
            <Testimonial/>
            <Products/>
          </Box>
          <Footer/>
        </AppCotainer>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
