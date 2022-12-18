import React from "react";
import classes from "./Header.module.css";
import LeftHeaderList from "./LeftHeaderList";
import HeaderRight from "./HeaderRight";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <LeftHeaderList />
        <HeaderRight />
      </header>
    </>
  );
};

export default Header;
