import React, { useState } from "react";
import useStyles from "./style";
import MenuIcon from "@material-ui/icons/Menu";
import { InputBase, Typography } from "@material-ui/core";
import logo from "../../images/bookLogo.png";
// icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const MobileHead = () => {
  const classes = useStyles();
  const [expandHead, setExpandHead] = useState(true);
  return (
    <section>
      <div className={classes.smallHead}>
        <Typography className={classes.textStyle}>
          " This website is a book worm's Paradise, containing a large sum of
          amazing books "
        </Typography>
      </div>
      <div
        className={
          !expandHead
            ? classes.mobileHead
            : `${classes.mobileHead} ${classes.mobileHeadOpen}`
        }
      >
        <MenuIcon
          className={
            !expandHead
              ? classes.expandIco
              : `${classes.expandIco} ${classes.expandIcoOpen}`
          }
          onClick={() => setExpandHead(!expandHead)}
        />
        <div className={classes.hiddenHead}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.searcher}>
            <InputBase placeholder="Search…" className={classes.searchBar} />
            <div className={classes.icoDiv}>
              <SearchIcon className={classes.ico} />
            </div>
          </div>
          <div
            className={classes.cartDiv}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <ShoppingCartIcon style={{ color: "black" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHead;
