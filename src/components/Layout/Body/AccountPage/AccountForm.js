import Input from "../../../UI/Input";
import classes from "./AccountForm.module.css";

const AccountForm = (props) => {
  const InputItem = [
    {
      id: "",
      type: "text",
      min: "1",
      max: "15",
    },
  ];

  return (
    <form className={classes.form}>
      <Input
        label="날짜"
        input={{
          id: "amount_" + props.id,
          type: "date",
          value: Date(),
          placeholder: Date(),
        }}
      />
      <Input
        label="품목"
        input={{
          id: "amount_" + props.id,
          type: "text",
          min: "1",
          max: "5",
          placeholder: "품목...",
        }}
      />
      <Input
        label="결제수단"
        input={{
          id: "amount_" + props.id,
          type: "text",
          min: "1",
          max: "5",
          placeholder: "품목...",
        }}
      />
      <Input
        label="수입"
        input={{
          id: "amount_" + props.id,
          type: "text",
          min: "1",
          max: "5",
          placeholder: "품목...",
        }}
      />
      <Input
        label="지출"
        input={{
          id: "amount_" + props.id,
          type: "text",
          min: "1",
          max: "5",
          placeholder: "품목...",
        }}
      />
      <button className={classes["btn-add"]}>추가</button>
    </form>
  );
};

export default AccountForm;
