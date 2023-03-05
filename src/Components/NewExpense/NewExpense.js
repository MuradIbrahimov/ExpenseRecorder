import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
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
  const [newExpenseform, setNewExpenseForm] = useState(false);
  const newExpenseFormClickHandler = () => {
    setNewExpenseForm(true);
  };
  const cancelBtnClickHandler = () => {
    setNewExpenseForm(false);
  };
  return (
    <div className="new-expense">
      {!newExpenseform && (
        <button key={"addExpenseBtn"} onClick={newExpenseFormClickHandler}>
          Add New Expense
        </button>
      )}
      {newExpenseform && (
        <ExpenseForm
          key={"ExpenseForm"}
          onCancel={cancelBtnClickHandler}
          onSaveExpenseData={expenseDataSaveHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
