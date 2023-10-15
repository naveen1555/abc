import React, { Suspense } from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Products from "../products/Products";
import classes from "./Dashboard.module.css";
import Layout from "../layout/Layout";
import { productSellList, topcontainer } from "./Content";
import CustomCard from "./Card/Card";
import RegularChart from "./chart/RegularChart";
import CustomizedProgressBars from "./chart/CustomCirculer";
import ChartCardTextContainer from "./chart/chartCardTextContainer/ChartCardTextContainer";
import ProductCard from "./productCard/ProductCard";
import Sidebar from "../sidebar/Sidebar";
import ProductsMain from "./ProductsMain";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <Layout userName="Naveen">
        <div className={classes.dashboardMain}>
          {/* //section1 */}
          <section className={classes.cardsContainer}>
            {topcontainer.map((item, index) => (
              <CustomCard cardInfo={item} key={index} />
            ))}
          </section>

          {/* //section2 */}
          <section className={classes.chartsContainer}>
            <div className={classes.circeChartContainer}>
              <ChartCardTextContainer
                title="Overview"
                subTitle="Monthly Earning"
              />
              <RegularChart />
            </div>
            <div
              className={
                classes.circeChartContainer + " " + classes.chartCardHeight
              }
            >
              <ChartCardTextContainer
                title="Customers"
                subTitle="Customers that buy products"
              />
              <div className={classes.circeChartSubContainer}>
                <CustomizedProgressBars
                  value={65}
                  value2={20}
                  showText={true}
                />
              </div>
            </div>
          </section>

          {/* //section3 */}
          <ProductsMain />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
