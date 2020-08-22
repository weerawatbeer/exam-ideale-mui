const CardInsuranceStyle = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 166,
    height: 130,
    margin: 15,
    borderRadius: 8,
    backgroundColor: (props) => props.backgroundColor,
    boxShadow: "0 7px 30px rgba(40, 69, 90, 0.2)",
  },

  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "100%",
  },
};

export default CardInsuranceStyle;
