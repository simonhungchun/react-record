import { useState, useMemo, memo, useContext } from "react";
import SelfContext from "../context";
// import * as React from "react";
// useCallback(fn, []) === useMemo(() => fn, []) memo
const Child = memo((props: { a: number }) => {
  const data = useContext(SelfContext);
  console.log("re-render");
  return (
    <div>
      Child{props.a}
      <ul>
        {data.c.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});
export default function MemoView() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);
  const sum = useMemo(() => a + b, [a, b]);
  // 修改b两次 在修改c
  return (
    <div>
      <h1>Memo View</h1>
      <h2>sum: {sum}</h2>
      <h3>c: {c}</h3>
      <button onClick={() => setA((value) => value + 1)}>修改A</button>
      <button onClick={() => setB((value) => value + 1)}>修改B</button>
      <button onClick={() => setC((value) => value + 1)}>修改C</button>
      <Child a={a} />
    </div>
  );
}

// useState useEffect
