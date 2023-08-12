import { createContext } from "react";
// 创建数据上下文
const SelfContext = createContext({
  a: 1,
  b: false,
  c: [1, 2, 3],
});
export default SelfContext;
