// 匯入 React 及 useState Hook
import React, { useState } from 'react';

// 定義 Calculator 計算機元件
export default function Calculator() {
  // input 用來儲存目前輸入的算式，result 用來儲存計算結果
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // 處理按鈕點擊，將按下的值加到 input 字串後面
  const handleClick = (value) => {
    setInput(input + value);
  };

  // 清除輸入與結果
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // 按下等號時計算結果
  const handleEqual = () => {
    try {
      // 使用 eval 計算 input 的算式，並將結果轉為字串
      // eslint-disable-next-line no-eval
      setResult(eval(input).toString());
    } catch {
      // 若算式有誤，顯示「錯誤」
      setResult('錯誤');
    }
  };

  // 回傳計算機的畫面
  return (
    <div style={{ maxWidth: 240, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>計算機</h2>
      {/* 顯示目前輸入的算式，若無則顯示 0 */}
      <div style={{ marginBottom: 10, minHeight: 24 }}>{input || '0'}</div>
      {/* 顯示計算結果，藍色字體 */}
      <div style={{ marginBottom: 10, minHeight: 24, color: 'blue' }}>{result}</div>
      {/* 數字與運算符號按鈕區塊 */}
      <div>
        {[7,8,9,'/'].map(v => (
          // 這是一個按鈕元件，顯示數字或運算符號 v
          // 當按鈕被點擊時，會呼叫 handleClick 函式，並將 v 轉成字串傳入
          <button key={v} onClick={() => handleClick(v.toString())}>{v}</button>
        ))}
      </div>
      <div>
        {[4,5,6,'*'].map(v => (
          <button key={v} onClick={() => handleClick(v.toString())}>{v}</button>
        ))}
      </div>
      <div>
        {[1,2,3,'-'].map(v => (
          <button key={v} onClick={() => handleClick(v.toString())}>{v}</button>
        ))}
      </div>
      <div>
        {[0,'.','+'].map(v => (
          <button key={v} onClick={() => handleClick(v.toString())}>{v}</button>
        ))}
        {/* 等號按鈕，計算結果 */}
        <button onClick={handleEqual}>=</button>
      </div>
      {/* 清除按鈕，寬度 100% */}
      <button style={{ width: '100%', marginTop: 8 }} onClick={handleClear}>清除</button>
    </div>
  );
}