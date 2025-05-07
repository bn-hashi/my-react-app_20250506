/* src/components/Hooks.jsx */
import React, { useState, useEffect, useRef, createContext, useContext } from 'react';

// 問題1: useState の遅延初期化
export function Test1() {
  const [num] = useState(() => {
    console.log('🔵 初期化関数 実行');
    return 7;
  });
  console.log('🟢 レンダー実行');
  return <div>数字は {num} です</div>;
}

// 問題2: useEffect の空配列で 1 回だけ実行
export function Test2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(5);
    console.log('⚙️ effect 内で setCount(5) 実行');
  }, []);

  console.log('🟢 レンダー時の count:', count);
  return <div>カウントは {count}</div>;
}

// 問題3: useContext の利用例
export const FruitContext = createContext('イチゴ');
function Child() {
  const fruit = useContext(FruitContext);
  return <div>好きなフルーツ: {fruit}</div>;
}
export function Test3() {
  return (
    <FruitContext.Provider value="メロン">
      <Child />
    </FruitContext.Provider>
  );
}

// 問題4: useRef で前の値を覚えておく
export function Test4() {
  const [cnt, setCnt] = useState(0);
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = cnt;
  }, [cnt]);

  return (
    <div>
      <p>前の値：{String(prevRef.current)}</p>
      <p>現在の値：{cnt}</p>
      <button onClick={() => setCnt(cnt + 1)}>増やす</button>
    </div>
  );
}

// 問題5: useEffect のクリーンアップでタイマー管理
export function Test5() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    console.log('🕰️ タイマー開始');

    return () => {
      clearInterval(id);
      console.log('🧹 タイマー停止（クリーンアップ）');
    };
  }, []);

  return <div>秒数：{time}</div>;
}
