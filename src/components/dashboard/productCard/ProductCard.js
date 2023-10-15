import React from "react";
import classes from "./ProductCard.module.css";

const ProductCard = ({ productInfo }) => {
  const { img, title, info, stock, price, totalSales } = productInfo;
  return (
    <div className={classes.productInfoContainer}>
      <div className={classes.leftContainer}>
        <img src={img} alt={title} width={150} height={80} />
        <div className={classes.productTitle}>
          <h3>{title}</h3>
          <div className={classes.productInfo}>{info}</div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div>{stock} in stack</div>
        <h3>$ {price}</h3>
        <div>{totalSales}</div>
      </div>
    </div>
  );
};

export default ProductCard;
