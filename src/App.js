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

  const websiteObjects = [{ image: bbc, url: 'https://www.bbc.com', color: '' }, { image: f1, url: 'https://www.formula1.com', color: '' }, { image: github, url: 'https://www.github.com', color: '' }, { image: gmail, url: 'https://www.gmail.com', color: '' }, { image: googlecalendar, url: 'https://www.googlecalendar.com', color: '' }, { image: linkedin, url: 'https://www.linkedin.com', color: '' }, { image: netflix, url: 'https://www.netflix.com', color: '' }, { image: newyorktimes, url: 'https://www.nytimes.com/', color: '' }, { image: premierleague, url: 'https://www.premierleague.com', color: '' }, { image: reddit, url: 'https://www.reddit.com', color: '' }, { image: youtube, url: 'https://www.youtube.com', color: '' }];


  const goToSite = (e) => {
    console.log(e);
    window.open(e, '_blank');

  }
  return (
    <div className="App">
      {websiteObjects.map((websiteObject) => (
        <>
          <img onClick={e => goToSite(e.target.id)} src={websiteObject.image} alt='' id={websiteObject.url} className='logo' />
        </>
      ))}

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
