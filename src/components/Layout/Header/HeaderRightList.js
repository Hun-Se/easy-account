import React from "react";
import classes from "./HeaderRightList.module.css";

const HeaderRightList = (props) => {
  return (
    <>
      <li className={classes[props.className]}></li>
    </>
  );
};

export default HeaderRightList;
