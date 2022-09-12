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
    { name: 'youtube', id: 11, image: youtube, url: 'chrome://bookmarks/', },
  ];

  // const websiteObjects = props.data;

  const goToSite = (e) => {
    console.log(e);
    // window.open(e);
  }

  return (
    <div className='bookmarksPalet'>
      {websiteObjects.map((websiteObject) => (
        <div key={websiteObject.id} >
          <svg onClick={e => goToSite(e.target.id)} id={websiteObject.url} className={`logo ${websiteObject.name}`}>
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
