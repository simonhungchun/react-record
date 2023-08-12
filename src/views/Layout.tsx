import { useImmer } from "use-immer";
import { useRef, useEffect } from "react";
import Child from "../components/Child";
export default function Layout() {
  const [count, setCount] = useImmer({ a: 1, b: 2, c: 3 });
  const [index, setIndex] = useImmer(0);
  let timer = useRef<number>();
  useEffect(
    function () {
      timer.current = window.setInterval(function () {
        setIndex((darft) => darft + 1);
      }, 2000);
    },
    [setIndex]
  );
  useEffect(
    function () {
      if (index === 5) {
        clearInterval(timer.current);
      }
    },
    [index]
  );
  const divElement = useRef(null);
  useEffect(function () {
    console.log(divElement.current);
  }, []);
  function increase() {
    setCount((darft) => {
      darft.a += 1;
    });
  }
  // 在Layout组件中去获取Child组件中的DOM节点
  // 将Child组件的ref转发给Layout
  const childRef = useRef<{ echo: Function; fn: Function }>(null);
  return (
    <div ref={divElement} onClick={increase} className="bg-red-200">
      layout{count.a}
      <Child ref={childRef} />
      <p>{index}</p>
      <button
        onClick={() => {
          // console.log(childRef.current);
          childRef.current?.echo();
          childRef.current?.fn(12345);
        }}
      >
        echo child input{" "}
      </button>
    </div>
  );
}
// 不可变数据（react）
// 可变数据 (vue)
