import React from "react";

// ButtonClick
function ButtonClick() {
  function handleClick() {
    alert("ボタンがクリックされました");
  }

  return <button onClick={handleClick}>クリック</button>;
}

// Toggle
function Toggle() {
  const [isOn, setIsOn] = React.useState(true);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

// LogEvent
function LogEvent() {
  function handleClick(event) {
    console.log("クリック位置: ", event.clientX, event.clientY);
  }

  return <button onClick={handleClick}>クリックして位置を確認</button>;
}

// Form
function Form() {
  const [name, setName] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`送信された名前: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名前:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">送信</button>
    </form>
  );
}

// ShowHide2
function ShowHide2() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "非表示にする" : "表示する"}
      </button>
      {isVisible && <p>このテキストは表示されます。</p>}
    </div>
  );
}

// Parent and Child
function Parent() {
  function handleChildClick(message) {
    alert(`子からのメッセージ: ${message}`);
  }

  return <Child onClick={handleChildClick} />;
}

function Child({ onClick }) {
  return (
    <button onClick={() => onClick("こんにちは！")}>
      子コンポーネントのボタン
    </button>
  );
}

export {
  ButtonClick,
  Toggle,
  LogEvent,
  Form,
  ShowHide2,
  Parent
};