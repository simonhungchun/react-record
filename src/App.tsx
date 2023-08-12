import { FC, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./router";
import { MyContext, state as initValue, reducer } from "./store";
// createContext初始化传递参数的目的是为了推导类型

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initValue); // 管理状态 + 对状态的curd
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </MyContext.Provider>
  );
};
export default App;
