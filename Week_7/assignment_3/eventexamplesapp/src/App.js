import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  const [clickMessage, setClickMessage] = useState('');

  const incrementValue = () => {
    setCounter(counter + 1);
  };

  const sayHello = () => {
    setMessage('Hello Member: ' + counter);
    alert(message);
  };

  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  const decrementValue = () => {
    setCounter(counter - 1);
  };

  const sayWelcome = (welcomeText) => {
    alert(welcomeText);
  };

  const handleOnPress = () => {
    setClickMessage('I was clicked');
    alert(clickMessage);
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Event App</h1>
      
      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
        <h3>Counter</h3>
        <p>Counter Value: {counter}</p>
        <button onClick={handleIncrement} style={{ marginRight: '10px', padding: '8px 16px' }}>
          Increment
        </button>
        <button onClick={decrementValue} style={{ padding: '8px 16px' }}>
          Decrement
        </button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
        <h3>Welcome Button</h3>
        <button onClick={() => sayWelcome('welcome')} style={{ padding: '8px 16px' }}>
          Say Welcome
        </button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
        <h3>Synthetic Event</h3>
        <button onClick={handleOnPress} style={{ padding: '8px 16px' }}>
          Click Me
        </button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
