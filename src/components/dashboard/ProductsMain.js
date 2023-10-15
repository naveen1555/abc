import React from "react";
import classes from "./Dashboard.module.css";
import { productSellList } from "./Content";
import ChartCardTextContainer from "./chart/chartCardTextContainer/ChartCardTextContainer";
import ProductCard from "./productCard/ProductCard";
import Searchbar from "../searchBar/Searchbar";

const ProductsMain = () => {
  return (
    <>
      <section className={classes.productSellContianer}>
        <div className={classes.productsTableTopbar}>
          <div className={classes.productsTitleBar}>
            <ChartCardTextContainer title="Product Sell" />
            <div>
              <Searchbar background="rgb(237 231 231)" />
            </div>
          </div>
          <div className={classes.productLabels}>
            <div>Product Name</div>
            <div>&nbsp;</div>
            <div className={classes.productLabelsRightContainer}>
              <div>Stock </div>
              <div>Price</div>
              <div>Total Sales</div>
            </div>
          </div>
        </div>
        <div className={classes.productsContainer}>
          {productSellList.map((item, index) => (
            <ProductCard key={index} productInfo={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsMain;
