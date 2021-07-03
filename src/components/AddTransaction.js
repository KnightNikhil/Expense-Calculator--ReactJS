import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");
  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const NewTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransaction(NewTransaction);
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Input Text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br /> (negative-expense, positive-income)
          </label>
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
