import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control"> </div>
        <label>Title</label>
        <input type="text" />
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
