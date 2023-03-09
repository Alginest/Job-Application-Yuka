import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  smallHead: {
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontFamily: "Kaushan Script",
  },
  /*Big Head*/
  bigHead: {
    width: "100%",
    height: "110px",
    backgroundColor: "white",
  },
  mainCont: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headLogo: {
    width: 200,
    height: "auto",
  },
  /*Search Bar*/
  searcher: {
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    borderRadius: 3,
    width: 550,
  },
  searchBar: {
    border: "1px solid black",
    width: 530,
    height: 33,
    "& .MuiInputBase-input": {
      marginLeft: 20,
    },
  },
  icoDiv: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 50,
    height: 33,
    transition: "all 0.2s ease-in",
    "&:hover": {
      backgroundColor: "blue",
      "& $ico": {
        transform: "scale(1.2)",
      },
    },
  },
  ico: {
    transition: "all 0.3s ease-in",
    width: "100%",
    color: "white",
  },
}));
