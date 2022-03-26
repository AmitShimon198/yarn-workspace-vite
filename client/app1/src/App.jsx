import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [displayData, setDisplayData] = useState();
  useEffect(() => {
    fetchTestData()
  }, [])
  const fetchTestData = async () => {
    const res = await fetch('http://localhost:3200/test');
    const testData = await res.json();
    setDisplayData(testData)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App1{JSON.stringify(displayData)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
