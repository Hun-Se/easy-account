import InputSearch from "../../../UI/InputSearch";
import PaymentList from "./PaymentList";
import SelectMonth from "./SelectMonth";
import SelectDate from "./SelectDate";
import Filter from "./Filter";
import classes from "./FunctionItems.module.css";

const FunctionItems = () => {
  return (
    <>
      <li>
        <InputSearch />
      </li>
      <li>
        <PaymentList />
      </li>
      <li>
        <SelectMonth />
      </li>
      <li>
        <SelectDate />
      </li>
      <li>
        <Filter />
      </li>
    </>
  );
};

export default FunctionItems;
