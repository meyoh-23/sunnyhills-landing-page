import { Box, CssBaseline } from "@mui/material";
/* import Navbar from "./components/Navbar"; */
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
    <CssBaseline/>
      <Hero/>
      <Box variant='main'>
        <CoreValues/>
        <Testimonial/>
      </Box>
    </>
  );
}

export default App;
