import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography className={classes.text}>Made by Aldin Durakovic</Typography>
      <Typography className={classes.text}>
        Job Application Submission
      </Typography>
    </footer>
  );
};

export default Footer;
