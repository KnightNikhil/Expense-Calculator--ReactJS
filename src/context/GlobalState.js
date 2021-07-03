import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const ACTIONS = {
  DELETE_TRANSACTION: "DELETE_TRANSACTION",
  ADD_TRANSACTION: "ADD_TRANSACTION",
};

const initialstate = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  const deleteTransaction = (id) => {
    dispatch({
      type: ACTIONS.DELETE_TRANSACTION,
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: ACTIONS.ADD_TRANSACTION,
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
