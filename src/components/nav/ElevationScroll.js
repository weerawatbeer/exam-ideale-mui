import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import navlogo from "../../assets/images/logo.png";
import callcenterIcon from "../../assets/images/callcenter-icon.png";
import Button from "@material-ui/core/Button";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { ThailandIcon } from "../icon/Icons";
import style from "./ElevationScrollStyle";

const useStyles = makeStyles(style);

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.navBar}>
          <Toolbar style={{ minHeight: 83 }}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              style={{ width: "100%" }}
            >
              <Box>
                <Typography>
                  <img src={navlogo} alt="navlogo" />
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                flexWrap="nowrap"
                justifyContent="space-around"
              >
                <Button
                  disableRipple
                  variant="outlined"
                  className={classes.buttonNav}
                >
                  <Typography
                    className={classes.titleMenu}
                    style={{ marginRight: 0 }}
                  >
                    หน้าแรก
                  </Typography>
                </Button>

                <Button
                  disableRipple
                  variant="outlined"
                  className={classes.buttonNav}
                >
                  <Typography
                    className={classes.btnNavText}
                    style={{ marginRight: 0 }}
                  >
                    โปรโมชั่น
                  </Typography>
                </Button>
                <Button
                  disableRipple
                  variant="outlined"
                  className={classes.buttonNav}
                  endIcon={<ExpandMoreRoundedIcon />}
                >
                  <Typography className={classes.btnNavText}>
                    สินค้าประกันภัย
                  </Typography>
                </Button>
                <Button
                  disableRipple
                  variant="outlined"
                  className={classes.buttonNav}
                  endIcon={<ExpandMoreRoundedIcon />}
                >
                  <Typography className={classes.btnNavText}>
                    บริการหลังการขาย
                  </Typography>
                </Button>
                <Button
                  disableRipple
                  variant="outlined"
                  className={classes.buttonNav}
                  endIcon={<ExpandMoreRoundedIcon />}
                >
                  <Typography className={classes.btnNavText}>
                    สาระน่ารู้
                  </Typography>
                </Button>
                <Button
                  disableRipple
                  variant="outlined"
                  className={classes.buttonNav}
                >
                  <Typography
                    className={classes.btnNavText}
                    style={{ marginRight: 10 }}
                  >
                    ทำไมต้องซื้อประกันกับเรา
                  </Typography>
                </Button>

                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box>
                    <img src={callcenterIcon} alt="callcenter" />
                  </Box>
                  <Box>
                    <Typography
                      color="secondary"
                      style={{ fontSize: 16, lineHeight: 1 }}
                    >
                      สายด่วนตอบโจทย์
                    </Typography>
                    <Typography
                      color="primary"
                      style={{ fontSize: 22, lineHeight: 1 }}
                    >
                      0-2783-0222
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buttonLogin}
                    startIcon={<PersonOutlineRoundedIcon />}
                  >
                    <Typography className={classes.btnLoginText}>
                      เข้าสู่ระบบ
                    </Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    className={classes.buttonLan}
                    startIcon={<ThailandIcon />}
                    endIcon={<ExpandMoreRoundedIcon />}
                  >
                    <Typography className={classes.btnLanText}>ไทย</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
