import { Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contextApi";
import useStyles from "./style";
// images
import noCover from "../../images/NoCover.png";
const Shop = () => {
  const { setSearch, books, loading } = useGlobalContext();
  const tabletBreakpoint = 1024;
  const mobileBreakpoint = 600;
  const [breakPoint, setBreakpoint] = useState(1730);
  const [tabletBooks, setTabletBooks] = useState([]);
  const [mobileBooks, setMobileBooks] = useState([]);
  const changeGrid = () => {
    let innerWidth = window.innerWidth;
    setBreakpoint(innerWidth);
    if (breakPoint <= tabletBreakpoint && breakPoint >= mobileBreakpoint) {
      let newBooks = books.slice(0, 9);
      setTabletBooks(newBooks);
    } else if (breakPoint <= mobileBreakpoint) {
      let newestBooks = books.slice(0, 8);
      console.log(newestBooks);
      setMobileBooks(newestBooks);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", changeGrid);

    return () => {
      window.removeEventListener("resize", changeGrid);
    };
  }, [breakPoint]);

  const classes = useStyles();

  if (loading) {
    return (
      <section className={classes.bookStore}>
        <div className={classes.showCase}>
          <Typography className={classes.title}>Showcase:</Typography>
          <TextField
            id="filled-basic"
            label="Search..."
            className={classes.searchBox}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="body-uno">
          <div className="spinner-square">
            <div className="square-1 square"></div>
            <div className="square-2 square"></div>
            <div className="square-3 square"></div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={classes.bookStore}>
      <div className={classes.showCase}>
        <Typography className={classes.title}>Showcase:</Typography>
        <TextField
          id="filled-basic"
          label="Search Books..."
          className={classes.searchBox}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Grid container spacing={2} className={classes.mainGrid}>
        {breakPoint > tabletBreakpoint
          ? books?.map((book) => {
              const { id } = book;
              const { title, description } = book?.volumeInfo;
              const { thumbnail } = book?.volumeInfo?.imageLinks ?? {};
              const authors = book?.volumeInfo?.authors ?? "";

              return (
                <Grid item lg={3} key={id} className={classes.gridItem}>
                  <div className={classes.card}>
                    <img
                      src={thumbnail ? thumbnail : noCover}
                      alt={description}
                      className={classes.cardImg}
                    />
                    <Container>
                      <div className={classes.cardInfo}>
                        <Typography
                          variant="h5"
                          style={{ marginTop: 5, height: 50 }}
                        >
                          {title ? title.substring(0, 28) : "No Name Book"}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          className={classes.desc}
                        >
                          {description
                            ? description.substring(0, 150).toLowerCase()
                            : "No Information"}
                          .
                        </Typography>
                        <Typography>{authors}</Typography>
                      </div>
                    </Container>
                  </div>
                </Grid>
              );
            })
          : breakPoint <= tabletBreakpoint && breakPoint > mobileBreakpoint
          ? tabletBooks.map((book) => {
              const { id } = book;
              const { title, description } = book?.volumeInfo;
              const { thumbnail } = book?.volumeInfo?.imageLinks ?? {};
              const authors = book?.volumeInfo?.authors ?? "";
              return (
                <Grid item lg={3} key={id} className={classes.gridItem}>
                  <div className={classes.card}>
                    <img
                      src={thumbnail ? thumbnail : noCover}
                      alt={description}
                      className={classes.cardImg}
                    />
                    <Container>
                      <div className={classes.cardInfo}>
                        <Typography
                          variant="h5"
                          style={{ marginTop: 5, height: 50 }}
                        >
                          {title ? title.substring(0, 28) : "No Name Book"}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          className={classes.desc}
                        >
                          {description
                            ? description.substring(0, 150).toLowerCase()
                            : "No Information"}
                          .
                        </Typography>
                        <Typography>{authors}</Typography>
                      </div>
                    </Container>
                  </div>
                </Grid>
              );
            })
          : breakPoint <= mobileBreakpoint
          ? mobileBooks.map((book) => {
              const { id } = book;
              const { title, description } = book?.volumeInfo;
              const { thumbnail } = book?.volumeInfo?.imageLinks ?? {};
              const authors = book?.volumeInfo?.authors ?? "";
              return (
                <Grid item lg={3} key={id} className={classes.gridItem}>
                  <div className={classes.card}>
                    <img
                      src={thumbnail ? thumbnail : noCover}
                      alt={description}
                      className={classes.cardImg}
                    />
                    <Container>
                      <div className={classes.cardInfo}>
                        <Typography
                          variant="h5"
                          style={{ marginTop: 5, height: 50 }}
                        >
                          {title ? title.substring(0, 28) : "No Name Book"}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          className={classes.desc}
                        >
                          {description
                            ? description.substring(0, 150).toLowerCase()
                            : "No Information"}
                          .
                        </Typography>
                        <Typography>{authors}</Typography>
                      </div>
                    </Container>
                  </div>
                </Grid>
              );
            })
          : ""}
      </Grid>
    </section>
  );
};

export default Shop;
