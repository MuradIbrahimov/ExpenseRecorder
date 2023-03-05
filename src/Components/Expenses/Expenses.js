import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const expenseArr = props.expense;
  const [currstate, setCurrState] = useState(2021);
  const expenseFilterStateChanged = (changedState) => {
    setCurrState(changedState);
    console.log(typeof currstate);
  };
  const filteredExpenseArr = expenseArr.filter((x) => {
    return x.date.getFullYear() === Number(currstate);
  });
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedDefaultValue={currstate}
          expenseFilterState={expenseFilterStateChanged}
        ></ExpensesFilter>
        <ExpensesList item={filteredExpenseArr}></ExpensesList>
      </Card>
    </>
  );
}
export default Expenses;
