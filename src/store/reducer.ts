export interface IState {
  a: number;
  b: number;
  c: number;
}
export interface IAction {
  type: "changeA" | "changeB" | "changeC";
  payload: number;
}
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "changeA":
      return { ...state, a: action.payload };
    case "changeB":
      return { ...state, b: action.payload };
    case "changeC":
      return { ...state, c: action.payload };
    default:
      throw new Error("你到底想干啥！");
  }
};

export default reducer;
