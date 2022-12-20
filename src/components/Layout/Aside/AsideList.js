import classes from "./AsideList.module.css";

const AsideList = (props) => {
  return <li className={classes["aside-list"]}>{props.name}</li>;
};

export default AsideList;
