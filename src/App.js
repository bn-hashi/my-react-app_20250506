/* src/App.js */
import React, { useState } from 'react';
import { HelloButton, LiveInput, ToggleBackground, AlertForm, HoverButton } from './components/EventHandlers';
import { Test1, Test2, Test3, Test4, Test5 } from './components/Hooks';
import { Baby, GrowUp, ShowHide, Counter, RouterLike } from './components/LifecycleExamples';
import { ButtonClick, Toggle, LogEvent, Form, ShowHide2, Parent } from './components/EventHandlers2';
import { Counter2, DataFetcher, ThemeApp, Counter3, WindowSizeDisplay, Calculator, Parent2 } from './components/Hooks2';

function EventHandlersApp() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React イベントハンドリングまとめ</h1>

      <section>
        <h2>1. 「こんにちは！」ボタン</h2>
        <HelloButton />
      </section>
      <hr />

      <section>
        <h2>2. リアルタイム文字表示</h2>
        <LiveInput />
      </section>
      <hr />

      <section>
        <h2>3. チェックボックスで背景色チェンジ</h2>
        <ToggleBackground />
      </section>
      <hr />

      <section>
        <h2>4. フォーム送信でアラート表示</h2>
        <AlertForm />
      </section>
      <hr />

      <section>
        <h2>5. マウスオーバーで色が変わるボタン</h2>
        <HoverButton />
      </section>
    </div>
  );
}

function HooksApp() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Hooks 練習</h1>

      <section>
        <h2>問題1</h2>
        <Test1 />
      </section>
      <hr />

      <section>
        <h2>問題2</h2>
        <Test2 />
      </section>
      <hr />

      <section>
        <h2>問題3 (useContext)</h2>
        <Test3 />
      </section>
      <hr />

      <section>
        <h2>問題4 (useRef)</h2>
        <Test4 />
      </section>
      <hr />

      <section>
        <h2>問題5 (タイマー)</h2>
        <Test5 />
      </section>
    </div>
  );
}

function LifecycleExamplesApp() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React コンポーネントのライフサイクル例</h1>

      <section>
        <h2>問題1: Baby</h2>
        <Baby />
      </section>
      <hr />

      <section>
        <h2>問題2: GrowUp</h2>
        <GrowUp />
      </section>
      <hr />

      <section>
        <h2>問題3: ShowHide (Clock)</h2>
        <ShowHide />
      </section>
      <hr />

      <section>
        <h2>問題4: Counter</h2>
        <Counter />
      </section>
      <hr />

      <section>
        <h2>問題5: RouterLike</h2>
        <RouterLike />
      </section>
    </div>
  );
}

function EventHandlers2App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Reactの基礎：イベントハンドリング編</h1>

      <section>
        <h2>1. イベントハンドリングの基本</h2>
        <ButtonClick />
      </section>
      <hr />

      <section>
        <h2>2. イベントハンドリングとthisの扱い</h2>
        <Toggle />
      </section>
      <hr />

      <section>
        <h2>3. イベントオブジェクト</h2>
        <LogEvent />
      </section>
      <hr />

      <section>
        <h2>4. フォームイベントのハンドリング</h2>
        <Form />
      </section>
      <hr />

      <section>
        <h2>5. 条件付きレンダリングによる応用</h2>
        <ShowHide2 />
      </section>
      <hr />

      <section>
        <h2>6. カスタムイベントハンドラ</h2>
        <Parent />
      </section>
    </div>
  );
}

function HooksApp2() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Reactの応用技術：Hooks（フックス）編</h1>

      <section>
        <h2>シンプルなカウントアップ機能</h2>
        <Counter2 />
      </section>
      <hr />

      <section>
        <h2>データフェッチとクリーンアップ</h2>
        <DataFetcher />
      </section>
      <hr />

      <section>
        <h2>テーマの共有</h2>
        <ThemeApp />
      </section>
      <hr />

      <section>
        <h2>カウントの増減機能</h2>
        <Counter3 />
      </section>
      <hr />

      <section>
        <h2>ウィンドウサイズの監視</h2>
        <WindowSizeDisplay />
      </section>
      <hr />

      <section>
        <h2>useMemoの例</h2>
        <Calculator />
      </section>
      <hr />

      <section>
        <h2>useCallbackの例</h2>
        <Parent2 />
      </section>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState('eventHandlers');

  return (
    <div>
      <div style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', marginBottom: 20 }}>
        <button 
          onClick={() => setMode('eventHandlers')}
          style={{ 
            marginRight: 10,
            padding: '8px 16px',
            backgroundColor: mode === 'eventHandlers' ? '#4CAF50' : '#fff',
            color: mode === 'eventHandlers' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          イベントハンドリング
        </button>
        <button 
          onClick={() => setMode('eventHandlers2')}
          style={{ 
            marginRight: 10,
            padding: '8px 16px',
            backgroundColor: mode === 'eventHandlers2' ? '#4CAF50' : '#fff',
            color: mode === 'eventHandlers2' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          イベントハンドリング2
        </button>
        <button 
          onClick={() => setMode('hooks')}
          style={{ 
            marginRight: 10,
            padding: '8px 16px',
            backgroundColor: mode === 'hooks' ? '#4CAF50' : '#fff',
            color: mode === 'hooks' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          Hooks
        </button>
        <button 
          onClick={() => setMode('hooks2')}
          style={{ 
            marginRight: 10,
            padding: '8px 16px',
            backgroundColor: mode === 'hooks2' ? '#4CAF50' : '#fff',
            color: mode === 'hooks2' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          Hooks2
        </button>
        <button 
          onClick={() => setMode('lifecycle')}
          style={{ 
            padding: '8px 16px',
            backgroundColor: mode === 'lifecycle' ? '#4CAF50' : '#fff',
            color: mode === 'lifecycle' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          ライフサイクル
        </button>
      </div>
      {mode === 'eventHandlers' ? <EventHandlersApp /> : 
       mode === 'eventHandlers2' ? <EventHandlers2App /> :
       mode === 'hooks' ? <HooksApp /> : 
       mode === 'hooks2' ? <HooksApp2 /> :
       <LifecycleExamplesApp />}
    </div>
  );
}
