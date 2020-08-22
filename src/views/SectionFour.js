import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Title from "../components/title/Title";
import daimondIcon from "../assets/images/diamond-icon.png";
import sureIcon from "../assets/images/sure-icon.png";
import easyIcon from "../assets/images/easy-icon.png";
import CardTwo from "../components/card/CardTwo";
import style from "./SectionFourStyle";

const useStyles = makeStyles(style);
const SectionFour = () => {
  const classes = useStyles();
  const [data] = useState([
    {
      _id: 1,
      icon: daimondIcon,
      text: "คุ้มกว่า",
      detail: {
        detailOne: "รับความคุ้มครองที่ครอบคลุม สุดคุ้มกับค่า",
        detailTwo: "เบี้ยประกันภัยพร้อมความดูแลที่มากกว่า",
      },
    },
    {
      _id: 2,
      icon: sureIcon,
      text: "มั่นใจกว่า",
      detail: {
        detailOne: "วางใจได้ อุ่นใจดี มีประสิทธิภาพด้วย",
        detailTwo: "ประสบการณ์อย่างมืออาชีพ",
      },
    },
    {
      _id: 3,
      icon: easyIcon,
      text: "ง่ายกว่า",
      detail: {
        detailOne: "ซื้อปุ๊บ จ่ายปั๊บ รับความคุ้มครองทันที",
      },
    },
  ]);
  return (
    <Box
      className={classes.boxSectionFour}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Box className={classes.boxChildSectionFour}></Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{
          marginTop: 12,
        }}
      >
        <Box>
          <Title text="ทำไมต้องซื้อประกันกับเรา" />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          style={{
            marginTop: 50,
          }}
        >
          {data.map((item) => (
            <CardTwo key={item._id} carddata={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SectionFour;
