import React from "react";
import InputSearch from "../../UI/InputSearch";

import classes from "./LeftHeaderList.module.css";

const LeftHeaderList = () => {
  return (
    <>
      <div className={classes["container-header-left"]}>
        <div className={classes["header-search"]}>
          <InputSearch></InputSearch>
        </div>
      </div>
    </>
  );
};

export default LeftHeaderList;
