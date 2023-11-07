import { Box, CssBaseline } from "@mui/material";
/* import Navbar from "./components/Navbar"; */
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import Testimonial from "./components/Testimonial";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <CssBaseline/>
      <Hero/>
      <Box variant='main'>
        <CoreValues/>
        <Testimonial/>
        <Products/>
      </Box>
      <Footer/>
    </>
  );
}

export default App;
