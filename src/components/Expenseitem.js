// a component in react is just a js function
import "./Expenseitem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 3, 23);
  // const expenseTitle = "Car Insurence";
  // const expenseAmount = 245.32;
  const month = props.date.toLocalString("en-US", { month: "long" });
  const day = props.date.toLocalString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    // <div className="expense-item">
    //   <div>{props.date.toISOString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{props.title} </h2>
    //     <div className="expense-item__price">{props.amount}</div>
    //   </div>
    // </div>
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
