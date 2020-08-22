import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import style from "./SimpleCardStyle";

const useStyles = makeStyles(style);

const SimpleCard = ({ carddata }) => {
  const classes = useStyles();
  const { text, icon, iconTwo } = carddata;
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <Card
      className={classes.root}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={classes.details}>
        <div className="itemIcon">{hover ? iconTwo : icon}</div>
        <div>
          <Typography className="title">{text}</Typography>
        </div>
      </div>
    </Card>
  );
};

export default SimpleCard;
