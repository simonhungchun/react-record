import { FC, useState, useReducer, createContext } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import RouteConfig from "./router";
import SelfContext from "./context";
const App: FC = () => {
  const [value, setValue] = useState({ a: 1, b: false, c: [11, 22, 33] });
  const [state, dispatch] = useReducer(
    (
      state: { a: number; b: number; c: number },
      action: { type: "changeA" | "changeB" | "changeC"; payload: number }
    ) => {
      switch (action.type) {
        case "changeA":
          return { ...state, a: action.payload };
        case "changeB":
          return { ...state, b: 321 };
        case "changeC":
          return { ...state, c: 321 };
        default:
          throw new Error("你到底想干啥！");
      }
    },
    {
      a: 1,
      b: 2,
      c: 3,
    }
  );
  const MyContext = createContext({ state, dispatch });
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <SelfContext.Provider value={value}>
        <button
          className="border border-[orange]"
          onClick={() => dispatch({ type: "changeA", payload: 8080 })}
        >
          测试useReducer {state.a}|{state.b}|{state.c}
        </button>
        <br />
        <button
          className="border border-[red]"
          onClick={() => setValue({ a: 2, b: true, c: [3333, 2222, 1111] })}
        >
          setValue
        </button>
        <BrowserRouter>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="/home"
          >
            to home (NavLink)
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="/discover"
          >
            to discover (NavLink)
          </NavLink>
          <RouteConfig />
        </BrowserRouter>
      </SelfContext.Provider>
    </MyContext.Provider>
  );
};
// /discover/abc
// 1. /discover路由传递了路径参数为abc字符串
// 2. /discover/abc为路由路径整体 没有参数
export default App;
