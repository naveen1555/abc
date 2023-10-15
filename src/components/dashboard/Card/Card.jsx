import React from "react";
import classes from "./card.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Card = ({ cardInfo }) => {
  return (
    <div>
      <div className={classes.cardContainer}>
        <img src={cardInfo.img} alt="img" width={100} />
        <div className={classes.cardTextContainer}>
          <div className={classes.title}>{cardInfo.title}</div>
          <h5> {cardInfo.money} </h5>
          <div className={classes.grothIndicationContainer}>
            <span
              className={
                cardInfo.gainOrLoss < 0
                  ? classes.negitiveValue
                  : classes.positiveValue
              }
            >
              {cardInfo.gainOrLoss < 0 ? (
                <>
                  <ArrowDownwardIcon fontSize="small" /> {-cardInfo.gainOrLoss}
                </>
              ) : (
                <>
                  <ArrowUpwardIcon fontSize="small" /> {cardInfo.gainOrLoss}
                </>
              )}
              %
            </span>
            <span>{cardInfo.month}</span>
          </div>
        </div>

        <p></p>
      </div>
    </div>
  );
};

export default Card;
