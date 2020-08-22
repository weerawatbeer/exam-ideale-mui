import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import lineLogo from "../assets/images/line-icon.png";
import facebookLogo from "../assets/images/facebook-icon.png";
import callcenterLogo from "../assets/images/callcenter-icon.png";
import dbdLogo from "../assets/images/dbd-icon2.png";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "../components/scroll/ScrollTop";
import style from "./SectionSixStyle";
const useStyles = makeStyles(style);
const SectionSix = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.boxSectionSix}
      display="flex"
      flexDirection="column"
    >
      <Container>
        <Box
          className={classes.boxChildSectionSixTop}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <img
              src={facebookLogo}
              style={{ marginRight: 28, height: 30, width: 30 }}
              alt="facebook"
            />
            <img
              src={lineLogo}
              style={{ marginRight: 28, height: 30, width: 30 }}
              alt="line"
            />
          </Box>
          <Box display="flex" flexDirection="row">
            <Box>
              <img src={callcenterLogo} alt="callcenter" />
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
            <ScrollTop>
              <Fab
                color="primary"
                size="medium"
                aria-label="scroll back to top"
              >
                <KeyboardArrowUpIcon fontSize="large" />
              </Fab>
            </ScrollTop>
          </Box>
        </Box>
      </Container>

      <Container>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box display="flex" flexDirection="column" style={{ width: "100%" }}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box>
                <Typography className={classes.ulTitle}>หน้าแรก</Typography>
                <Typography className={classes.ulTitle}>โปรโมชั่น</Typography>
                <Typography className={classes.ulTitle}>
                  สินค้าประกัน
                </Typography>
                <ul className={classes.ulMenu}>
                  <li>รถยนต์</li>
                  <li>พ.ร.บ.</li>
                  <li>อุบัติเหตุ</li>
                  <li>เดินทาง</li>
                </ul>
              </Box>
              <Box>
                <ul className={classes.ulMenu}>
                  <li>สุขภาพ</li>
                  <li>ที่อยู่อาศัย</li>
                </ul>
                <Typography className={classes.ulTitle}>
                  บริการหลังการขาย
                </Typography>
                <ul className={classes.ulMenu}>
                  <li>บริการพิเศษเฉพาะลูกค้าตอบโจทย์</li>
                  <li>ขั้นตอนการเคลม</li>
                  <li>ร้องเรียนบริการ</li>
                  <li>คำถามที่พบบ่อย</li>
                </ul>
              </Box>
              <Box>
                <Typography className={classes.ulTitle}>สาระน่ารู้</Typography>
                <ul className={classes.ulMenu}>
                  <li>รถยนต์</li>
                  <li>สุขภาพ</li>
                  <li>อุบัติเหตุส่วนบุคคล</li>
                  <li>เดินทาง</li>
                  <li>ที่อยู่อาศัย</li>
                  <li>อื่นๆ</li>
                </ul>
              </Box>
            </Box>
            <Box style={{ marginTop: 24 }}>
              <Typography color="secondary" style={{ fontSize: 16 }}>
                บริษัท ธนชาตโบรกเกอร์ จำกัด
              </Typography>
              <Typography style={{ color: "#606060", fontSize: 16 }}>
                999/3, 999/4 อาคารเดอะไนน์ ถนนพระราม 9 แขวงพัฒนาการ เขตสวนหลวง
                กรุงเทพมหานคร 10250
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            style={{ marginLeft: 155 }}
          >
            <Box>
              <Typography className={classes.ulTitle}>
                ทำไมต้องซื้อประกันกับเรา
              </Typography>
              <ul className={classes.ulMenu}>
                <li>คุ้มกว่า</li>
                <li>มั่นใจกว่า</li>
                <li>ง่ายกว่า</li>
              </ul>
              <Typography className={classes.ulTitle}>เกี่ยวกับเรา</Typography>
              <Typography className={classes.ulTitle}>ติดต่อเรา</Typography>
              <Typography className={classes.ulTitle}>
                นโยบายความเป็นส่วนตัว
              </Typography>
            </Box>
            <Box style={{ marginTop: 24 }}>
              <img src={dbdLogo} alt="dbd-logo" />
            </Box>
          </Box>
        </Box>
      </Container>

      <Box
        display="flex"
        className={classes.boxFooterSectionSix}
        justifyContent="center"
        alignItems="center"
      >
        <Typography style={{ color: "#FFFFFF", fontSize: 12 }}>
          © THANACHART BROKER COMPANY LIMITED, 2019 ALL RIGHTS RESERVED
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionSix;
