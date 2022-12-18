import HeaderRightList from "./HeaderRightList";

import classes from "./HeaderRight.module.css";

const HeaderRight = () => {
  const listItems = [
    {
      id: 1,
      name: "dark",
    },
    {
      id: 2,
      name: "alram",
    },
    {
      id: 3,
      name: "setting",
    },
    {
      id: 4,
      name: "profile",
    },
  ];

  const headerList = listItems.map((list) => (
    <HeaderRightList
      key={list.id}
      className={"list-" + list.name}
    ></HeaderRightList>
  ));

  return <ul className={classes["header-list"]}>{headerList}</ul>;
};

export default HeaderRight;
