import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Hello World</h1>
      <p>基于 React + Vite 构建</p>
      <div style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '48px', margin: '0 0 16px' }}>{count}</p>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{
            padding: '10px 28px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            background: '#646cff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          点击 +1
        </button>
      </div>
    </div>
  )
}

export default App
