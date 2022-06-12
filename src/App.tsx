import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";
import { useState } from "react";
import { RootState } from "./redux/store";

function App() {
  // 状態にアクセス！ storeのreducerのcounterにアクセス(RootState)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("10");

  return (
    <div className="App">
      <h1>count : {count}</h1>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>/
    </div>
  );
}

export default App;
