import { useState } from "react";
import classes from "./Counter.module.scss";
export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return <div className={classes.counter} onClick={increment}>Counter is {counter}</div>;
};
