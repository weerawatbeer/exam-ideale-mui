import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  CartIcon,
  LicenseIcon,
  HealthIcon,
  TravelIcon,
  InsuranceIconOne,
  InsuranceIconTwo,
} from "../components/icon/Icons";
import Title from "../components/title/Title";
import SimpleCard from "../components/card/SimpleCard";
import style from "./SectionTwoStyle";

const useStyles = makeStyles(style);

const SectionTwo = () => {
  const classes = useStyles();

  const [sectionTwo] = useState([
    {
      _id: 1,
      icon: <CartIcon color="#F37021" />,
      iconTwo: <CartIcon />,
      text: "รถยนต์",
    },
    {
      _id: 2,
      icon: <LicenseIcon color="#F37021" />,
      iconTwo: <LicenseIcon />,
      text: "พ.ร.บ.",
    },
    {
      _id: 3,
      icon: <HealthIcon color="#F37021" />,
      iconTwo: <HealthIcon />,
      text: "สุขภาพ",
    },
    {
      _id: 4,
      icon: <TravelIcon color="#F37021" />,
      iconTwo: <TravelIcon />,
      text: "เดินทาง",
    },
    {
      _id: 5,
      icon: <InsuranceIconOne color="#F37021" />,
      iconTwo: <InsuranceIconOne />,
      text: "อุบัติเหตุส่วนบุคคล",
    },
    {
      _id: 6,
      icon: <InsuranceIconTwo color="#F37021" />,
      iconTwo: <InsuranceIconTwo />,
      text: "ประกันชีวิต",
    },
  ]);
  return (
    <Box
      className={classes.boxSectionTwo}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Box className={classes.boxChildSectionTwo}></Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        style={{ marginTop: -38 }}
      >
        <Box>
          <Title text="ค้นหาประเภทประกัน" />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          style={{ marginTop: 57, marginBottom: 72 }}
        >
          {sectionTwo.map((data) => (
            <SimpleCard key={data._id} carddata={data} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTwo;
