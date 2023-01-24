import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({ ...userInput, emteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setUserInput({ ...userInput, emteredDate: event.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control"> </div>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
        <div className="new-expense__control"> </div>
        <label>Amount</label>
        <input type="number" onChange={amountChangeHandler} />
        <div className="new-expense__control"> </div>
        <label>Date </label>
        <input type="date" onChange={dateChangeHandler} />
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
