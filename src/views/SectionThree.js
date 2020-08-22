import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Title from "../components/title/Title";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import NotInterestedRoundedIcon from "@material-ui/icons/NotInterestedRounded";
import Brightness1RoundedIcon from "@material-ui/icons/Brightness1Rounded";
import arrowLogo from "../assets/images/arrow-icon.png";

import style from "./SectionThreeStyle";

const useStyles = makeStyles(style);
const SectionThree = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.boxSectionThree}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box className={classes.boxChildSectionThree}></Box>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          style={{ margin: "20px 44px 0px 44px" }}
        >
          <Box display="flex" flexDirection="row" justifyContent="center">
            <Title text="ลูกค้าพูดถึงเราอย่างไรบ้าง" />
          </Box>
          <Box
            className={classes.reviews}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            style={{ marginTop: 50 }}
          >
            <Box display="flex" flexDirection="row" justifyContent="flex-start">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                style={{
                  borderBottom: "4px solid #F37021",
                  marginBottom: -3,
                }}
              >
                <Typography style={{ color: "#F37021" }}>รีวิว (20)</Typography>
              </Box>
            </Box>

            <Button
              disableRipple
              variant="outlined"
              className={classes.buttonReview}
            >
              <Typography style={{ marginRight: 5 }}>ดูรีวิวทั้งหมด</Typography>
              <img src={arrowLogo} alt="arrow" />
            </Button>
          </Box>
          <Box display="flex" flexDirection="row" style={{ marginTop: 24 }}>
            <Box display="flex" flexDirection="column">
              <Box
                display="flex"
                flexDirection="row"
                style={{ marginLeft: -6 }}
              >
                <StarRateRoundedIcon
                  style={{
                    color: "#F6D05B",
                    fontSize: 30,
                  }}
                />
                <StarRateRoundedIcon
                  style={{
                    color: "#F6D05B",
                    fontSize: 30,
                    marginLeft: -10,
                  }}
                />
                <StarRateRoundedIcon
                  style={{
                    color: "#F6D05B",
                    fontSize: 30,
                    marginLeft: -10,
                  }}
                />
                <StarRateRoundedIcon
                  style={{
                    color: "#F6D05B",
                    fontSize: 30,
                    marginLeft: -10,
                  }}
                />
                <StarRateRoundedIcon
                  style={{
                    color: "#D1D3D3",
                    fontSize: 30,
                    marginLeft: -10,
                  }}
                />
              </Box>
              <Box display="flex" flexDirection="row">
                <Typography
                  style={{
                    color: "#606060",
                    fontSize: 16,
                    marginRight: 5,
                  }}
                >
                  เพ็ญศิริ
                </Typography>
                <CheckCircleRoundedIcon fontSize="small" />
              </Box>
              <Typography
                style={{
                  color: "#606060",
                  fontSize: 16,
                }}
              >
                2 วันที่แล้ว
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginLeft: "150px" }}
            >
              <Typography
                style={{
                  marginTop: 0,
                  color: "#606060",
                  fontSize: 16,
                }}
              >
                ดีตรงที่สามารถ สืบค้นสถานที่ฉุกเฉินภายในเว็บได้ด้วยสะดวก ง่าย
                จริงๆ ค่ะ
              </Typography>
              <Typography
                style={{
                  marginTop: 16,
                  color: "#0E73BA",
                  fontSize: 12,
                }}
              >
                ใช่ ฉันแนะนำประกันนี้
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            style={{
              paddingBottom: 10,
              borderBottom: "0.5px solid #DDDDDD",
            }}
          >
            <ThumbUpRoundedIcon
              style={{ color: "#D1D3D3", fontSize: 24, marginLeft: 14 }}
            />
            <ThumbDownRoundedIcon
              style={{ color: "#D1D3D3", fontSize: 24, marginLeft: 14 }}
            />
            <NotInterestedRoundedIcon
              style={{ color: "#D1D3D3", fontSize: 24, marginLeft: 14 }}
            />
          </Box>
        </Box>
      </Container>
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
          bottom: 65,
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

export default SectionThree;
