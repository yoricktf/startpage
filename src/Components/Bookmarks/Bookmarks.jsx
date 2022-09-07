import React from 'react'



const Bookmarks = (props) => {
  const websiteObjects = props.data;

  const goToSite = (e) => {
    console.log(e);
    window.open(e, '_blank');
  }

  return (
    <div>
      {websiteObjects.map((websiteObject) => (
        <img
          key={websiteObject.id}
          src={websiteObject.image}
          alt={`${websiteObject.name}'s logo and link`}
          onClick={e => goToSite(e.target.id)}
          id={websiteObject.url}
          className={`logo ${websiteObject.name}`} />
      ))}
    </div>
  )
}

export default Bookmarks
