import React, { useReducer } from "react";


const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};


function reducerFn(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UserReducer = () => {
  const [state, dispatch] = useReducer(reducerFn, { count: 0 });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h2>Count: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      </div>
    </div>
  );
};

export default UserReducer;
