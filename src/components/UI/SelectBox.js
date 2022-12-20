import classes from "./SelectBox.module.css";

const SelectBox = (props) => {
  // const selectList = props.selectItem.map((list) => (
  //   <li className={classes["option-item"]}>{list.name}</li>
  // ));
  return (
    <div className={classes["select-box"]}>
      <button className={classes["select-label"]}>예시</button>
      <ul className={classes["option-list"]}>
        <li className={classes["option-item"]}>apple</li>
        <li className={classes["option-item"]}>orange</li>
        <li className={classes["option-item"]}>grape</li>
        <li className={classes["option-item"]}>melon</li>
      </ul>
    </div>
  );
};

export default SelectBox;
