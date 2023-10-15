import React from "react";
import classes from "./Layout.module.css";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import Searchbar from "../searchBar/Searchbar";

const Layout = (props) => {
  return (
    <div className={classes.layoutMain}>
      <div className={classes.topbar}>
        <div className={classes.helloText}>
          Hello {props.userName}
          <WavingHandIcon
            fontSize="small"
            style={{ color: "#f1c27d", transform: "scale(-1, 1)" }}
          />
          ,
        </div>

        <div>
          <Searchbar />
        </div>
      </div>
      <div className={classes.childContiner}>{props.children}</div>
    </div>
  );
};

export default Layout;
