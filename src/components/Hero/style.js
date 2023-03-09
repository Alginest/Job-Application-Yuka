import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  heroSec: {
    height: "auto",
    width: "100%",
  },
  bg: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 350,
    },
  },
}));
