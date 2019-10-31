import React from 'react';

import './banner.scss';

const Banner = ({ appName }) => {
  return (
    <div className='banner'>
      <div>
        <h1> conduit </h1>
        <p> A place to share your knowledge. </p>
      </div>
    </div>
  )
}

export default Banner;