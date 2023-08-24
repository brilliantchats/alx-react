import './App.css';
import {getFooterCopy, getFullYear } from './utils.js';
import holberton from './holberton.jpg';

export default function App() {
  return (
    <>
    <div className="App-header">
      <img src={holberton} alt="Holberton"/>
      <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
    </div>
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
    </>
  )
}
