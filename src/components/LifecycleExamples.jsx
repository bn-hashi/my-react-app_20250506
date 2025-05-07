/* src/components/LifecycleExamples.jsx */
import React, { useState, useEffect, useRef } from 'react';

// ■ 問題1: ① うまれる（Mount）で 1 回だけログ
export function Baby() {
  useEffect(() => {
    console.log('👶 生まれたよ！');
  }, []); // ① Mount

  console.log('🖍️ レンダリング');
  return <h2>こんにちは</h2>;
}

// ■ 問題2: ② そだつ（Update）たびに数字 +1
export function GrowUp() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (age >= 100) return; // 100歳以上になったら停止

    const timer = setInterval(() => {
      console.log('🍚 ごはんを食べた');
      setAge(a => a + 1);
    }, 1000); // 1秒ごとに更新

    return () => clearInterval(timer); // クリーンアップ関数
  }, [age]); // age が変わるたびに実行

  return <p>年齢：{age}</p>;
}

// ■ 問題3: タイマーと ③ ひっこす（Unmount）前の片づけ
function Clock() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSec(s => s + 1), 1000);
    console.log('⏰ タイマー開始');

    return () => {
      clearInterval(id);
      console.log('🧹 タイマー停止'); // ③ Unmount 時
    };
  }, []);

  return <p>{sec}s</p>;
}
export function ShowHide() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>表示/非表示</button>
      {show && <Clock />}
    </div>
  );
}

// ■ 問題4: useRef で前の値を覚える
export function Counter() {
  const [n, setN] = useState(0);
  const prev = useRef();

  useEffect(() => {
    prev.current = n; // レンダー後に前の値を保存
  }, [n]);

  return (
    <div>
      <button onClick={() => setN(n + 1)}>+1</button>
      <p>前 → {prev.current ?? 'なし'} ／ 今 → {n}</p>
    </div>
  );
}

// ■ 問題5: ページ切り替えで ①②③全部体験
function PageA() {
  useEffect(() => {
    console.log('📄A mount');
    return () => console.log('📄A unmount');
  }, []);
  return <h2>Page A</h2>;
}
function PageB() {
  useEffect(() => {
    console.log('📄B mount');
    return () => console.log('📄B unmount');
  }, []);
  return <h2>Page B</h2>;
}
export function RouterLike() {
  const [page, setPage] = useState('A');
  return (
    <>
      <button onClick={() => setPage(p => (p === 'A' ? 'B' : 'A'))}>切り替え</button>
      {page === 'A' ? <PageA /> : <PageB />}
    </>
  );
}