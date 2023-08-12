import { createContext, Dispatch } from "react";
import _state from "./state";
import _reducer from "./reducer";
import type { IState, IAction } from "./reducer";

export const MyContext = createContext<{
  state: IState;
  dispatch: Dispatch<IAction>;
}>(null as any);
export const state = _state;
export const reducer = _reducer;
