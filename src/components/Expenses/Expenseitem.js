import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./Expenseitem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

// import ExpenseDate from "./ExpenseDate";
// import React, { useState } from "react";
// // a component in react is just a js function
// import "./Expenseitem.css";
// import Card from "..UI/Card";

// const ExpenseItem = (props) => {
//   const [title, setTitle] = useState(props.title); // react hook

//   const clickHandler = () => {
//     setTitle("Updated!");
//   };
//   // const expenseDate = new Date(2023, 3, 23);
//   // const expenseTitle = "Car Insurence";
//   // const expenseAmount = 245.32;
//   // const month = props.date.toLocalString("en-US", { month: "long" });
//   // const day = props.date.toLocalString("en-US", { day: "2-digit" });
//   // const year = props.date.getFullYear();
//   return (
//     // <div className="expense-item">
//     //   <div>{props.date.toISOString()}</div>
//     //   <div className="expense-item__description">
//     //     <h2>{props.title} </h2>
//     //     <div className="expense-item__price">{props.amount}</div>
//     //   </div>
//     // </div>
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       {/* <div>
//         <div>{month}</div>
//         <div>{year}</div>
//         <div>{day}</div>
//       </div> */}
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price"> ${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}> Change Title</button>
//     </Card>
//   );
// };

// export default ExpenseItem;
