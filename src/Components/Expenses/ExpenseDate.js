import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const expenseYear = props.date.getFullYear();
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <>
      <div className="expense-date">
        <div className="expense-date__month">{expenseMonth}</div>
        <div className="expense-date__day">{expenseDay}</div>
        <div className="expense-date__year">{expenseYear}</div>
      </div>
    </>
  );
}
