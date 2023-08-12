import { useCallback, useState, useEffect } from "react";
// useMemo React.memo
const IndexChild = function (props: { cb: () => any }) {
  useEffect(
    function () {
      console.log("我渲染了！");
    },
    // 执行时机：第一次渲染 + props.cb内存地址发生变化的时候
    [props.cb]
  );
  console.log("重新渲染");
  return <div>Index Child</div>;
};
export default function Index() {
  const [count] = useState(0);
  const [foo, setFoo] = useState(0);
  // useCallback 它是缓存函数的
  const bar = useCallback(() => {
    console.log(count);
  }, [count]);
  // 在依赖项变化的时候缓存（内存地址不变）失效
  bar();
  return (
    <div onClick={() => setFoo((foo) => foo + 1)}>
      <div>count: {count}</div>
      <div>foo: {foo}</div>
      <IndexChild cb={bar} />
    </div>
  );
}

// 父组件重新渲染 迫使子组件重新渲染
