import "./ExpenseForm.css";
const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event);
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control"> </div>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
        <div className="new-expense__control"> </div>
        <label>Amount</label>
        <input type="number" />
        <div className="new-expense__control"> </div>
        <label>Date </label>
        <input type="date" />
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
