import { Routes, Route } from "react-router-dom";
import { routes, IRouterRecordRaw } from "./router.config";
export function buildRoutes(routes: IRouterRecordRaw[]) {
  let res = [];
  for (const { path, element, children } of routes) {
    if (children && children.length > 0) {
      res.push(
        <Route key={path} path={path} element={element}>
          {buildRoutes(children)}
        </Route>
      );
    } else {
      res.push(<Route path={path} key={path} element={element} />);
    }
  }
  return res;
}

const RouteConfig = () => <Routes>{buildRoutes(routes)}</Routes>;
export default RouteConfig;
