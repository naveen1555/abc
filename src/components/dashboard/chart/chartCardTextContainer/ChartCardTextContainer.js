import React from "react";
import classes from "./ChartCardTextContainer.module.css";

const ChartCardTextContainer = ({ title, subTitle }) => {
  return (
    <div className={classes.mainContainer}>
      <h4 className={classes.title}>{title}</h4>
      {subTitle && <div className={classes.subTitle}>{subTitle}</div>}
    </div>
  );
};

export default ChartCardTextContainer;
