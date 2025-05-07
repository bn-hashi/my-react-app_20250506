// src/components/EventHandlers.jsx
import React, { useState } from 'react';

// 1. 「こんにちは！」ボタン
export function HelloButton() {
  const [message, setMessage] = useState('');
  const handleClick = () => setMessage('こんにちは！');
  return (
    <div>
      <button onClick={handleClick}>ここをクリック</button>
      <p>{message}</p>
    </div>
  );
}

// 2. リアルタイム文字表示
export function LiveInput() {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="ここに文字を入力"
      />
      <p>入力中の文字：{text}</p>
    </div>
  );
}

// 3. チェックボックスで背景色チェンジ
export function ToggleBackground() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => setIsChecked(e.target.checked);
  const style = {
    padding: '20px',
    backgroundColor: isChecked ? 'lightblue' : 'white',
  };
  return (
    <div style={style}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        背景を変える
      </label>
      <p>チェックは {isChecked ? 'ON' : 'OFF'}</p>
    </div>
  );
}

// 4. フォーム送信でアラート表示
export function AlertForm() {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`あなたが入力した文字：${value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="文字を入力"
      />
      <button type="submit">送信</button>
    </form>
  );
}

// 5. マウスオーバーで色が変わるボタン
export function HoverButton() {
  const [hovered, setHovered] = useState(false);
  const style = {
    padding: '10px 20px',
    backgroundColor: hovered ? 'lightgreen' : 'gray',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  };
  return (
    <button
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      ここにマウスを乗せてね
    </button>
  );
}
