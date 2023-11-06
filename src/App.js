import { Box, CssBaseline } from "@mui/material";
/* import Navbar from "./components/Navbar"; */
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";

function App() {
  return (
    <>
    <CssBaseline/>
      <Hero/>
      <Box variant='main'>
        <CoreValues/>
      </Box>
    </>
  );
}

export default App;
