import { useState } from "react";
import Button from "../component/Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };

  const decreament = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      {/* <button onClick={increament}>Add</button> */}
      <Button onclick={increament}>Add Counter</Button>
      {count}
      <Button onclick={decreament}>Min Counter</Button>
      {/* <button onClick={decreament}>Min</button> */}
    </div>
  );
};

export default Counter;
