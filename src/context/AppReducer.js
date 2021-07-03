const ACTIONS = {
  DELETE_TRANSACTION: "DELETE_TRANSACTION",
  ADD_TRANSACTION: "ADD_TRANSACTION",
};

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
  }
};
