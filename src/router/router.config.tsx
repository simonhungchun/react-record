import Home from "../views/Home";
import Discover from "../views/Discover";
import Mine from "../views/Mine";
import { Outlet } from "react-router-dom";
import Layout from "../views/Layout";
import Index from "../views/Index";
import MemoView from "../views/MemoView";
import Test from "../views/Test";
export interface IRouterRecordRaw {
  path: string;
  element: React.ReactElement;
  children?: IRouterRecordRaw[];
}
// React组件如何做懒加载？？
export const routes: IRouterRecordRaw[] = [
  { path: "/", element: <Test /> },
  { path: "/memo-view", element: <MemoView /> },
  { path: "/index", element: <Index /> },
  { path: "/Layout", element: <Layout /> },
  { path: "/home", element: <Home /> },
  { path: "/discover", element: <Discover /> },
  { path: "/mine", element: <Mine /> },
  {
    path: "/parent",
    element: (
      <div>
        <div>header</div>
        <Outlet />
        <div>footer</div>
      </div>
    ),
    children: [
      {
        path: "a",
        element: <div>AAAAA</div>,
      },
      {
        path: "b",
        element: <div>BBBBB</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>NOT FOUND!</div>,
  },
];
