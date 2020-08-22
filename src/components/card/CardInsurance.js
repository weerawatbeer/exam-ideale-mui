import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import style from "./CardInsuranceStyle";

const useStyles = makeStyles(style);

const CardInsurance = ({ logo, color }) => {
  const props = { backgroundColor: color };
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <div>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
      </div>
    </Card>
  );
};

export default CardInsurance;
