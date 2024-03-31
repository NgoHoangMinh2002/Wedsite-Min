import logo from './hinh-anh-dep-1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          minhngo <code>Addmin</code> Dảk wed.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/profile.php?id=100092964797457"
          target="_blank"
          rel="noopener noreferrer"
        >
        Profile
        </a>
      </header>
    </div>
  );
}

export default App;
