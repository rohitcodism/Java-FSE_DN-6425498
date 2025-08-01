import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <header style={{ 
        backgroundColor: '#2c3e50', 
        padding: '20px', 
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0 0 20px 0', fontSize: '2.5em' }}>
          Cricket App
        </h1>
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => setFlag(true)}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: flag ? '#3498db' : '#7f8c8d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            List of Players
          </button>
          <button 
            onClick={() => setFlag(false)}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: !flag ? '#e74c3c' : '#7f8c8d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Indian Players
          </button>
        </div>
        <p style={{ margin: '0', fontSize: '18px' }}>
          Current View: {flag ? 'List of Players (Flag = true)' : 'Indian Players (Flag = false)'}
        </p>
      </header>

      <main>
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </main>
      
      <footer style={{
        backgroundColor: '#34495e',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px'
      }}>
        <p style={{ margin: '0' }}>© 2024 Cricket App - Demonstrating ES6 Features</p>
      </footer>
    </div>
  );
}

export default App;
