import logo from './logo.svg';
import './App.css';
import Documentation from './Documentation';

function App() {
  const headerText = "Welcome to My React App";
  return (
    <div className="App">
      <header className="App-header">
        <Documentation />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {headerText}
          
        </p>
        
    
      </header>
    </div>
  );
}

export default App;
