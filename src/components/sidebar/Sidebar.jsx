import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import classes from "./Sidebar.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Sidebar = () => {
  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.sidebarHeader}>
          <SettingsIcon style={{ color: "#fff" }} fontSize="large" />
          <div>Dashboard</div>
        </div>
        <div className={classes.sidebarItem}>
          <div className={classes.sidebarInnerItem}>
            <AssignmentIndIcon style={{ color: "#fff" }} />
            <div className={classes.sidebarItemLabel}>Dashboard</div>
          </div>
          <div />
        </div>

        <div className={classes.sidebarItem}>
          <div className={classes.sidebarInnerItem}>
            <AssignmentIndIcon style={{ color: "#fff" }} />
            <div className={classes.sidebarItemLabel}>Product</div>
          </div>
          <KeyboardArrowRightIcon fontSize="small" style={{ color: "#fff" }} />
        </div>

        <div className={classes.sidebarItem}>
          <div className={classes.sidebarInnerItem}>
            <AssignmentIndIcon style={{ color: "#fff" }} />
            <div className={classes.sidebarItemLabel}>Customers</div>
          </div>
          <KeyboardArrowRightIcon fontSize="small" style={{ color: "#fff" }} />
        </div>

        <div className={classes.sidebarItem}>
          <div className={classes.sidebarInnerItem}>
            <AssignmentIndIcon style={{ color: "#fff" }} />
            <div className={classes.sidebarItemLabel}>Income</div>
          </div>
          <KeyboardArrowRightIcon fontSize="small" style={{ color: "#fff" }} />
        </div>

        <div className={classes.sidebarItem}>
          <div className={classes.sidebarInnerItem}>
            <AssignmentIndIcon style={{ color: "#fff" }} />
            <div className={classes.sidebarItemLabel}>Promote</div>
          </div>
          <KeyboardArrowRightIcon fontSize="small" style={{ color: "#fff" }} />
        </div>

        <div className={classes.sidebarItem}>
          <div className={classes.sidebarInnerItem}>
            <AssignmentIndIcon style={{ color: "#fff" }} />
            <div className={classes.sidebarItemLabel}>Help</div>
          </div>
          <KeyboardArrowRightIcon fontSize="small" style={{ color: "#fff" }} />
        </div>

        <div className={classes.footer}>
          <div className={classes.footerInner}>
            <AccountCircleIcon style={{ fontSize: "35px" }} />
            <div className={classes.footerText}>
              <h3>Naveen</h3>
              <div>Project Manager</div>
            </div>
          </div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
