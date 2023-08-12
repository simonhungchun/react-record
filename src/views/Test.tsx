import { useContext } from "react";
import { MyContext } from "../store";
export default function Test() {
  const ctx = useContext(MyContext);
  console.log(ctx);
  return (
    <div>
      <h1>Test page</h1>
      <h2 onClick={() => ctx.dispatch({ type: "changeA", payload: 1234 })}>
        ctx.a: {ctx.state.a}
      </h2>
      <h2 onClick={() => ctx.dispatch({ type: "changeB", payload: 2345 })}>
        ctx.b: {ctx.state.b}
      </h2>
      <h2 onClick={() => ctx.dispatch({ type: "changeC", payload: 3456 })}>
        ctx.c: {ctx.state.c}
      </h2>
    </div>
  );
}
