const SectionThreeStyle = {
  boxSectionThree: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
    minHeight: 391,
    position: "relative",
    zIndex: 1,
  },

  boxChildSectionThree: {
    borderRadius: "25px 25px 0px 0px",
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 28,
    position: "absolute",
    top: "-28px",
    zIndex: 1,
  },

  reviews: {
    borderBottom: "2px solid #DDDDDD",
  },

  buttonReview: {
    backgroundColor: "inherit",
    borderRadius: 25,
    border: "none",
    boxShadow: "none",
    height: 34,
    color: "#0E73BA",
    fontSize: 16,
    marginRight: -16,
    "&:hover": {
      backgroundColor: "inherit",
      borderColor: "inherit",
      color: "#0E73BA",
    },
  },
};

export default SectionThreeStyle;
