import './App.css';
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
      <p>Copyright 2020 - holberton School</p>
    </div>
    </>
  )
}
