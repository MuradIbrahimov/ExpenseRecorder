import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const expenseArr = props.expense;

  return (
    <>
      <Card className="expenses">
        <ExpenseItem
          title={expenseArr[0].title}
          amount={expenseArr[0].amount}
          date={expenseArr[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenseArr[1].title}
          amount={expenseArr[1].amount}
          date={expenseArr[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenseArr[2].title}
          amount={expenseArr[2].amount}
          date={expenseArr[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenseArr[3].title}
          amount={expenseArr[3].amount}
          date={expenseArr[3].date}
        ></ExpenseItem>
        ;
      </Card>
    </>
  );
}
export default Expenses;
