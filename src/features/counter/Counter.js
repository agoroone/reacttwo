import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import Display from "./Display";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);

  return (
    <section className="card_post">
      <div className="card_post1" style={{ width: "250px", height: "250px" }}>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>

        <Display />
      </div>

      <div className="card_post1" style={{ width: "250px", height: "250px" }}>
        <h3>Increment By Amount</h3>
        <p>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        </p>
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
          Increase by Amount
        </button>
      </div>

      <div className="card_post1" style={{ width: "250px", height: "250px" }}>
        <h3>Decrement By Amount</h3>
        <p>
          <input value={amount2} onChange={(e) => setAmount2(e.target.value)} />
        </p>
        <button onClick={() => dispatch(decrementByAmount(Number(amount2)))}>
          Decrease by Amount
        </button>
      </div>
    </section>
  );
};

export default Counter;
