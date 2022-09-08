import React, { useEffect, useState } from "react";
import './App.css';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Time from './Components/Time/Time';
import Weather from './Components/Weather/Weather';
import News from './Components/News/News';
// importing images below
import bbc from './bbc.svg';
import f1 from './f1.svg';
import github from './github.svg';
import gmail from './gmail.svg';
import googleCalendar from './googlecalendar.svg';
import linkedin from './linkedin.svg';
import netflix from './netflix.svg';
import newYorkTimes from './newyorktimes.svg';
import premierLeague from './premierleague.svg';
import reddit from './reddit.svg';
import youtube from './youtube.svg';
import premiumize from './premiumize.svg';


function App() {
  const websiteObjects = [
    { name: 'bbc', id: 1, image: bbc, url: 'https://www.bbc.com', },
    { name: 'f1', id: 2, image: f1, url: 'https://www.formula1.com', },
    { name: 'github', id: 3, image: github, url: 'https://www.github.com', },
    { name: 'gmail', id: 4, image: gmail, url: 'https://www.gmail.com', },
    { name: 'googlecalendar', id: 5, image: googleCalendar, url: 'https://www.googlecalendar.com', },
    { name: 'linkedin', id: 6, image: linkedin, url: 'https://www.linkedin.com', },
    { name: 'netflix', id: 7, image: netflix, url: 'https://www.netflix.com', },
    { name: 'nyTimes', id: 8, image: newYorkTimes, url: 'https://www.nytimes.com/', },
    { name: 'premierLeague', id: 9, image: premierLeague, url: 'https://www.premierleague.com', },
    { name: 'premiumize', id: 12, image: premiumize, url: 'https://www.premiumize.me', },
    { name: 'reddit', id: 10, image: reddit, url: 'https://www.reddit.com', },
    { name: 'youtube', id: 11, image: youtube, url: 'https://www.youtube.com', },
  ];






  return (
    <div className="App">
      <Time />
      <Weather />
      <News />
      <Bookmarks data={[...websiteObjects]} />
    </div>
  );
}

export default App;
