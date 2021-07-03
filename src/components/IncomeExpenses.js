import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  var income = 0;
  var expense = 0;

  transactions.map((transaction) => {
    if (transaction.amount > 0) income += transaction.amount;
  });
  transactions.map((transaction) => {
    if (transaction.amount < 0) expense -= transaction.amount;
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +Rs. {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -Rs. {expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
