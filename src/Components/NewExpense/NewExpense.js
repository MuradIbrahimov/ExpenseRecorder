import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./NewExpense.css";
const NewExpense = (props) => {
  //DATA HANDLER
  const expenseDataSaveHandler = (enteredExpenseData) => {
    const formExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveExpenseDataApp(formExpenseData);
    // DATA HANDLER ENDS
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataSaveHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
