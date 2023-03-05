import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expense, setExpense] = useState(dummyExpenses);
  // NEW EXPENSE DATA TRANSFER
  const SaveExpenseDataApp = (enteredExpenseData) => {
    console.log("App JS");
    setExpense((x) => {
      return [enteredExpenseData, ...expense];
    });

    //NEW EXPENSE DATA TRANSFER DONE
  };
  return (
    <div className="App">
      <NewExpense onSaveExpenseDataApp={SaveExpenseDataApp}></NewExpense>
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
