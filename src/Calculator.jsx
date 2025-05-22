import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input).toString());
    } catch {
      setResult('錯誤');
    }
  };

  return (
    <div style={{ maxWidth: 240, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>計算機</h2>
      <div style={{ marginBottom: 10, minHeight: 24 }}>{input || '0'}</div>
      <div style={{ marginBottom: 10, minHeight: 24, color: 'blue' }}>{result}</div>
      <div>
        {[7,8,9,'/'].map(v => (
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
        <button onClick={handleEqual}>=</button>
      </div>
      <button style={{ width: '100%', marginTop: 8 }} onClick={handleClear}>清除</button>
    </div>
  );
}