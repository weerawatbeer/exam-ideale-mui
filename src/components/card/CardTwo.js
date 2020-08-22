import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import style from "./CardTwoStyle";

const useStyles = makeStyles(style);
const CardTwo = ({ carddata }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.details}>
        <div className={classes.itemIcon}>
          <img src={carddata.icon} alt="cardicon" />
        </div>
        <div>
          <Typography className={classes.title}>{carddata.text}</Typography>
        </div>
        <Box textAlign="center">
          <Typography className={classes.textDetail}>
            {carddata.detail.detailOne}
          </Typography>
          <Typography className={classes.textDetail}>
            {carddata.detail.detailTwo}
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default CardTwo;
