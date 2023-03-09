import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  /* small head*/
  smallHead: {
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    width: "100%",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      height: 50,
    },
  },
  textStyle: {
    color: "white",
    fontFamily: "Kaushan Script",
  },
  /*mobile head */
  mobileHead: {
    width: "100%",
    height: 50,
    display: "none",
    transition: "all 0.3s ease-in",
    backgroundColor: "white",
    overflow: "hidden",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  mobileHeadOpen: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  expandIco: {
    fontSize: 50,
    color: "gray",
    transition: "all 0.3s ease-in",
  },
  expandIcoOpen: {
    transform: "rotate(90deg)",
    color: "gray",
  },
  /*all */
  hiddenHead: {
    marginTop: 10,
  },
  logo: {
    width: 200,
  },
  searcher: {
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    borderRadius: 3,
    width: 200,
  },
  searchBar: {
    border: "1px solid black",
    width: 200,
    height: 33,
    "& .MuiInputBase-input": {
      marginLeft: 20,
    },
  },
}));
