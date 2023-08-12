import { forwardRef, useImperativeHandle, useState } from "react";
export default forwardRef(function Child(props: unknown, ref) {
  function echo() {
    console.log("我是child组件内部的函数，你有种来调用我啊！！");
  }
  const [count, setCount] = useState(100);
  useImperativeHandle(ref, () => ({
    echo,
    fn: setCount,
  }));
  return (
    <div className="bg-[green]">
      <button>child子组件</button>
      <br />
      <div>{count}</div>
      <input className="border" type="text" />
      <br />
      <button>child子组件</button>
    </div>
  );
});
