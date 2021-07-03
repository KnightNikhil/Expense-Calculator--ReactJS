import React, { useContext } from "react";
import GlobalState, { GlobalContext } from "../context/GlobalState";
function Balance() {
  const { transactions } = useContext(GlobalContext);
  var bal = 0;
  transactions.map((transaction) => {
    bal += transaction.amount;
  });

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">Rs. {bal}</h1>
    </>
  );
}

export default Balance;
