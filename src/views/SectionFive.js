import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Title from "../components/title/Title";
import CardInsurance from "../components/card/CardInsurance";
import insuranceLogoOne from "../assets/images/insurance-1.png";
import insuranceLogoTwo from "../assets/images/insurance-2.png";
import insuranceLogoThree from "../assets/images/insurance-3.png";
import insuranceLogoFour from "../assets/images/insurance-4.png";
import style from "./SectionFiveStyle";

const useStyles = makeStyles(style);
const SectionFive = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.boxSectionFive}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Box className={classes.boxChildSectionFive}></Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box>
          <Title text="บริษัทประกันคู่ค้า" />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          style={{
            marginTop: 28,
          }}
        >
          <CardInsurance logo={insuranceLogoOne} color="#1A4295" />
          <CardInsurance logo={insuranceLogoTwo} color="#F66F00" />
          <CardInsurance logo={insuranceLogoThree} color="#0413A2" />
          <CardInsurance logo={insuranceLogoFour} />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionFive;
