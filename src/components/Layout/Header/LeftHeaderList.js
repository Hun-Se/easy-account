import React from "react";

import classes from "./LeftHeaderList.module.css";

const LeftHeaderList = () => {
  return (
    <>
      <div className={classes["container-header-left"]}>
        <div className={classes["header-hambuger"]}></div>
        <div className={classes["header-search"]}>
          <div className={classes["icon-search"]}></div>
          <input className={classes["header-input"]} placeholder="검색..." />
        </div>
      </div>
    </>
  );
};

export default LeftHeaderList;
