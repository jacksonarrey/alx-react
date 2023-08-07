import logo from './logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo}/>
          <h1>school dashboard</h1>
      </div>
      <div className='App-body'>
        <p>login to acces the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>copyright 2020 - holberton school</p>
      </div>
    </div>
  );
}

export default App;
