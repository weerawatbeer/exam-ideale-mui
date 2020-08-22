const SimpleCardStyle = {
  root: {
    display: "flex",
    justifyContent: "center",
    width: 166,
    height: 130,
    margin: "0px 15px",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 7px 30px rgba(40, 69, 90, 0.2)",

    "& .title": {
      fontSize: 18,
      color: "#515C6F",
    },

    "& .itemIcon": {
      fill: "#FFFFFF",
      height: 64,
      width: 64,
    },

    "&:hover": {
      backgroundColor: "#F37021",
    },

    "&:hover .title": {
      color: "#FFFFFF",
    },

    "&:hover .itemIcon": {
      fill: "#FFFFFF",
    },
  },

  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default SimpleCardStyle;
