import logo from './logo.svg';
import bbc from './bbc.svg';
import f1 from './f1.svg';
import github from './github.svg';
import gmail from './gmail.svg';
import googlecalendar from './googlecalendar.svg';
import linkedin from './linkedin.svg';
import netflix from './netflix.svg';
import newyorktimes from './newyorktimes.svg';
import premierleague from './premierleague.svg';
import reddit from './reddit.svg';
import youtube from './youtube.svg';
import './App.css';





function App() {

  const images = [bbc, f1, github, gmail, googlecalendar, linkedin, netflix, newyorktimes, premierleague, reddit, youtube];















  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
