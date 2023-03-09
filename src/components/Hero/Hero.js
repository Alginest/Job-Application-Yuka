import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { bgImages } from "../../data/data";
const Hero = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > 2) {
      return 0;
    }
    return number;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        let newInd = prev + 1;
        return checkNumber(newInd);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { img } = bgImages[index];
  return (
    <section className={classes.heroSec}>
      <img src={img} alt="wide book background" className={classes.bg} />
    </section>
  );
};

export default Hero;
