import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState("");
  const expenseDataSaveHandler = (submitExpenseData) => {
    const formExpenseData = {
      ...submitExpenseData,
      id: Math.random().toString(),
    };
    console.log(formExpenseData.title);
    setNewExpense(
      <ExpenseItem
        title={formExpenseData.title}
        amount={formExpenseData.amount}
        date={formExpenseData.date}
      ></ExpenseItem>
    );
    // setNewExpenseArr([].push(formExpenseData));
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataSaveHandler}></ExpenseForm>
      {newExpense}
    </div>
  );
};
export default NewExpense;
