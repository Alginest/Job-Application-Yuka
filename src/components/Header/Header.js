import { Container, InputBase, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
// logo
import logo from "../../images/bookLogo.png";
// icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.smallHead}>
        <Typography className={classes.textStyle}>
          " This website is a book worm's Paradise, containing a large sum of
          amazing books "
        </Typography>
      </div>
      <div className={classes.bigHead}>
        <Container className={classes.mainCont}>
          <img src={logo} alt="book logo" className={classes.headLogo} />
          <div className={classes.searcher}>
            <InputBase placeholder="Search…" className={classes.searchBar} />
            <div className={classes.icoDiv}>
              <SearchIcon className={classes.ico} />
            </div>
          </div>
          <div className={classes.cartDiv}>
            <ShoppingCartIcon style={{ color: "black" }} />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
