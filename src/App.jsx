// 匯入 React 的 useState Hook，用來在函式元件中使用狀態
import { useState } from 'react'
// 匯入 React 標誌圖片
import reactLogo from './assets/react.svg'
// 匯入 Vite 標誌圖片
import viteLogo from '/vite.svg'
// 匯入應用程式的 CSS 樣式
import './App.css'

// 定義 App 函式型元件
function App() {
  // 宣告一個名為 count 的狀態變數，初始值為 0，setCount 用來更新 count
  const [count, setCount] = useState(0)

  // 元件的回傳內容（JSX）
  return (
    <>
      {/* 標誌區塊，點擊可連到 Vite 或 React 官方網站 */}
      <div>
        <a href="https://vite.dev" target="_blank">
          {/* 顯示 Vite 標誌 */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {/* 顯示 React 標誌 */}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* 標題 */}
      <h1>Vite + React</h1>
      {/* 卡片區塊 */}
      <div className="card">
        {/* 按鈕，點擊時 count 加 1 */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* 提示訊息，告訴使用者可以編輯 src/App.jsx 來測試 HMR（熱模組替換） */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* 文件閱讀提示 */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// 匯出 App 元件，讓其他檔案可以使用
export default App

// 這個元件是 React + Vite 的範例首頁，展示如何使用 useState 狀態、圖片資源與基本