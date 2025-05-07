import React, { useState, useEffect, useContext, useReducer, useMemo, useCallback } from "react";

// Counter2
function Counter2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </div>
  );
}

// DataFetcher
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // モックデータを使用
        const mockData = {
          title: "サンプルデータ",
          description: "これはモックデータです"
        };
        // 実際のAPIリクエストの代わりにモックデータを返す
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒待機
        setData(mockData);
      } catch (err) {
        setError('データの取得に失敗しました');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!data) return <div>データがありません</div>;

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
}

// ThemeApp
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      現在のテーマ: {theme}
    </button>
  );
}

function ThemeApp() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}

// Counter3
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter3() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>カウント: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>増加</button>
      <button onClick={() => dispatch({ type: "decrement" })}>減少</button>
    </div>
  );
}

// WindowSizeDisplay
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function WindowSizeDisplay() {
  const size = useWindowSize();

  return (
    <div>
      <p>ウィンドウの幅: {size.width}</p>
      <p>ウィンドウの高さ: {size.height}</p>
    </div>
  );
}

// Calculator
function ExpensiveCalculation(num) {
  console.log("計算中...");
  return num * 2;
}

function Calculator() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const result = useMemo(() => ExpensiveCalculation(count), [count]);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>計算結果: {result}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </div>
  );
}

// Parent
function Child({ onClick }) {
  return <button onClick={onClick}>子コンポーネントのボタン</button>;
}

function Parent2() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>カウント: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}

export {
  Counter2,
  DataFetcher,
  ThemeApp,
  Counter3,
  WindowSizeDisplay,
  Calculator,
  Parent2
};