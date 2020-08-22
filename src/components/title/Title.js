import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import style from "./TitleStyle";

const useStyles = makeStyles(style);

const Title = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} color="primary">
        {text}
      </Typography>
    </div>
  );
};

export default Title;
