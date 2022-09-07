import React from 'react'



const Bookmarks = (props) => {


  const websiteObjects = props.data;

  console.log(websiteObjects)




  const goToSite = (e) => {
    console.log(e);
    window.open(e, '_blank');
  }

  const hoverEffect = (e) => {
    console.log(e.title);

  }


  return (
    <div>
      <h1>hello world</h1>
      {websiteObjects.map((websiteObject) => (
        <img
          key={websiteObject.id}
          src={websiteObject.image}
          alt=''
          onMouseOver={e => hoverEffect(e.target)}
          onClick={e => goToSite(e.target.id)}
          id={websiteObject.name}
          title={websiteObject.color}
          className={`logo ${websiteObject.name}`} />

      ))}
    </div>
  )
}

export default Bookmarks
