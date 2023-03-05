import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expense-list__fallback">No expense items</h2>;
  }
  return props.item.map((x) => {
    return (
      <ul className="expenses-list">
        <ExpenseItem
          key={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        ></ExpenseItem>
      </ul>
    );
  });
};

export default ExpensesList;
