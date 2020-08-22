import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ElevationScroll from "./components/nav/ElevationScroll";
import SectionOne from "./views/SectionOne";
import SectionTwo from "./views/SectionTwo";
import SectionThree from "./views/SectionThree";
import SectionFour from "./views/SectionFour";
import SectionFive from "./views/SectionFive";
import SectionSix from "./views/SectionSix";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Kanit, sans-serif",
    fontSize: 16,
  },
  palette: {
    primary: {
      500: "#127AC7",
    },
    secondary: {
      A400: "#F37021",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ElevationScroll />
      <Container disableGutters maxWidth="xl">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
