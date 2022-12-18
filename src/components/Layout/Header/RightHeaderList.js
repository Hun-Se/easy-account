import React from "react";
import classes from "./RightHeader.module.css";

const RightHeaderList = () => {
  return (
    <>
      <ul className={classes["header-list"]}>
        <li className={classes["list-dark"]}></li>
        <li className={classes["list-alram"]}></li>
        <li className={classes["list-setting"]}></li>
        <li className={classes["list-profile"]}></li>
      </ul>
    </>
  );
};

export default RightHeaderList;
