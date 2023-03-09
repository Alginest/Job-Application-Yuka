import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bookStore: {
    width: "100%",
    height: "auto",
  },
  showCase: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      margin: "20px 0",
    },
  },
  title: {
    fontSize: 35,
  },
  mainGrid: {
    justifyContent: "center",
  },
  /*grid Items*/
  card: {
    border: "1px solid black",
    width: 280,
    height: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "7px 5px 5px 0px rgba(0,0,0,0.75)",
    webkitBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    mozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  cardInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  cardImg: {
    width: 200,
    height: 250,
    marginTop: 10,
  },
  desc: {
    fontSize: 12,
    marginTop: 15,
    height: 90,
  },
}));
