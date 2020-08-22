import smileIcon from "../../assets/images/smile-icon.png";

const ElevationScrollStyle = {
  root: {
    flexGrow: 1,
  },

  navBar: {
    backgroundColor: "white",
    height: 83,
    boxShadow: "0 3px 15px rgba(0, 0, 0, 0.16)",
  },
  titleMenu: {
    fontSize: 16,
    color: "#0E73BA",
    position: "relative",
    "&:before": {
      backgroundImage: `url(${smileIcon})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "65%",
      content: '""',
      position: "absolute",
      width: "40px",
      height: "25px",
      bottom: "-20px",
    },
  },
  titleDefault: {
    fontSize: 16,
    color: "#606060",
    margin: "0 15px",
    position: "relative",
    "&:hover": {
      color: "#0E73BA",
    },
  },
  loginBtn: {
    borderRadius: 26,
  },
  buttonLogin: {
    borderRadius: 25,
    boxShadow: "none",
    height: 34,
    width: 110,
    color: "#FFFFFF",
    marginLeft: 18,
    "&:hover": {
      backgroundColor: "#F37021",
      borderColor: "#F37021",
      boxShadow: "none",
    },
  },
  btnLoginText: {
    fontSize: 12,
  },
  buttonLan: {
    backgroundColor: "#FFFFF",
    borderRadius: 25,
    border: "1px solid #F37021",
    boxShadow: "none",
    height: 34,
    width: 85,
    color: "#F37021",
    marginLeft: 18,
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 12,

    "&:hover": {
      backgroundColor: "#FFFFFF",
      borderColor: "#F37021",
    },
  },
  btnLanText: {
    margin: 0,
    padding: 0,
    fontSize: 12,
  },
  buttonNav: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    border: "none",
    boxShadow: "none",
    height: 34,
    color: "#606060",
    fontSize: 16,

    "&:hover": {
      backgroundColor: "#FFFFFF",
      borderColor: "#F37021",
      color: "#0E73BA",
    },
  },
  btnNavText: {
    margin: -10,
    padding: 0,
    fontSize: 16,
  },
};

export default ElevationScrollStyle;
