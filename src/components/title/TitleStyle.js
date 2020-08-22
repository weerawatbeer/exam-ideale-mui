import smileIcon from "../../assets/images/smile-icon.png";

const TitleStyle = {
  title: {
    fontSize: 30,
    position: "relative",
    "&:before": {
      backgroundImage: `url(${smileIcon})`,
      backgroundRepeat: "no-repeat",
      content: '""',
      position: "absolute",
      width: 45,
      height: 25,
      bottom: -17,
      marginLeft: 1,
    },
  },
};

export default TitleStyle;
