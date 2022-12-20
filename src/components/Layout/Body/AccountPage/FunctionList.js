import FunctionItems from "./FunctionItems";

import classes from "./FunctionList.module.css";

const FunctionList = () => {
  return (
    <>
      <div className={classes["contianer-function"]}>
        <ul className={classes["list-function"]}>
          <FunctionItems></FunctionItems>
        </ul>
        <button className={classes["btn-delete"]}>Delete</button>
      </div>
    </>
  );
};

export default FunctionList;
