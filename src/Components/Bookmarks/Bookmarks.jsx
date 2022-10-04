import React from 'react'
import './Bookmarks.css'
// importing images below
import bbc from '../../bbc.svg';
import f1 from '../../f1.svg';
import github from '../../github.svg';
import gmail from '../../gmail.svg';
import googleCalendar from '../../googlecalendar.svg';
import linkedin from '../../linkedin.svg';
import netflix from '../../netflix.svg';
import newYorkTimes from '../../newyorktimes.svg';
import premierLeague from '../../premierleague.svg';
import reddit from '../../reddit.svg';
import youtube from '../../youtube.svg';
import premiumize from '../../premiumize.svg';

const Bookmarks = (props) => {
  const websiteObjects = [
    { name: 'bbc', image: bbc, url: 'https://www.bbc.com', },
    { name: 'f1', image: f1, url: 'http://kf.freestreams-live1.com/', },
    { name: 'github', image: github, url: 'https://www.github.com', },
    { name: 'gmail', image: gmail, url: 'https://www.gmail.com', },
    { name: 'googlecalendar', image: googleCalendar, url: 'https://www.googlecalendar.com', },
    { name: 'linkedin', image: linkedin, url: 'https://www.linkedin.com', },
    { name: 'netflix', image: netflix, url: 'https://www.netflix.com', },
    { name: 'nyTimes', image: newYorkTimes, url: 'https://www.nytimes.com/', },
    { name: 'premierLeague', image: premierLeague, url: 'https://live7.footybite.cc/', },
    { name: 'premiumize', image: premiumize, url: 'https://www.premiumize.me', },
    { name: 'reddit', image: reddit, url: 'https://www.reddit.com', },
    { name: 'youtube', image: youtube, url: 'https://www.youtube.com/', },
  ];

  // const websiteObjects = props.data;

  const goToSite = (e) => {
    window.open(e, "_self");
  }

  return (
    <div className='bookmarksPalet'>
      {websiteObjects.map((websiteObject, index) => (
        <div key={index} >
          <svg onClick={e => goToSite(websiteObject.url)} className={`logo ${websiteObject.name}`}>
            <image
              href={websiteObject.image}
              alt={`${websiteObject.name}'s logo and link`}
            />
          </svg>

        </div>
      ))}

    </div>
  )
}

export default Bookmarks
