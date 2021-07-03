import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "Rs. " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

function TransactionList() {
  const { deleteTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li
            className={transaction.amount > 0 ? "plus" : "minus"}
            key={transaction.id}
          >
            <span>{transaction.text}</span>
            {transaction.amount > 0 ? "+" : "-"}Rs.{" "}
            {Math.abs(transaction.amount)}
            <button className="delete-button" onClick={()=>deleteTransaction(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
