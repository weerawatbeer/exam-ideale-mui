import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import bannerImg from "../assets/images/banner-img.png";
import Brightness1RoundedIcon from "@material-ui/icons/Brightness1Rounded";
import style from "./SectionOneStyle";

const useStyles = makeStyles(style);

const SectionOne = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxSectionOne}>
      <Carousel
        autoPlay={false}
        indicators={false}
        navButtonsAlwaysInvisible={true}
      >
        <Paper>
          <img
            className={classes.img}
            alt="complex"
            src={bannerImg}
            id="back-to-top-anchor"
          />
        </Paper>
        <Paper>
          <img
            className={classes.img}
            alt="complex"
            src={bannerImg}
            id="back-to-top-anchor"
          />
        </Paper>
      </Carousel>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundColor: "inherit",
          borderRadius: 25,
          position: "absolute",
          width: "100%",
          bottom: 50,
        }}
      >
        <div
          color="#127AC7"
          style={{
            backgroundColor: "#127AC7",
            height: 12,
            width: 47,
            borderRadius: 25,
          }}
        ></div>

        <Brightness1RoundedIcon
          style={{ fontSize: 16, color: "#DDDDDD", marginLeft: 16 }}
        />
        <Brightness1RoundedIcon
          style={{ fontSize: 16, color: "#DDDDDD", marginLeft: 16 }}
        />
        <Brightness1RoundedIcon
          style={{ fontSize: 16, color: "#DDDDDD", marginLeft: 16 }}
        />
      </Box>
    </Box>
  );
};

export default SectionOne;
