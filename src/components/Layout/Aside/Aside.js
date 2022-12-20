import classes from "./Aside.module.css";
import AsideList from "./AsideList";

const Aside = () => {
  const listItem = [
    {
      id: 1,
      name: "가계부",
    },
    {
      id: 2,
      name: "월별매출총액",
    },
    {
      id: 3,
      name: "캘린더",
    },
    {
      id: 4,
      name: "세금계산기",
    },
  ];

  const asideList = listItem.map((list) => (
    <AsideList key={list.id} name={list.name}></AsideList>
  ));

  return (
    <>
      <aside className={classes["aside-container"]}>
        <div className={classes.logo}></div>
        {asideList}
      </aside>
    </>
  );
};

export default Aside;
