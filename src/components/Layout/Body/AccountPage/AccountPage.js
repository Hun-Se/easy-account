import FunctionList from "./FunctionList";
import AccountForm from "./AccountForm";
import classes from "./AccountPage.module.css";

const AccountPage = (props) => {
  return (
    <>
      <section className={classes["setcion-account"]}>
        <h2 className="blind">가계부</h2>
        <AccountForm></AccountForm>
        <FunctionList></FunctionList>
      </section>
    </>
  );
};

export default AccountPage;
