import React from 'react';

import sampleSvgImage from './bzrfeed.svg'

const ClientApp = () => {
  return (
    <>
    <h1>This is my client app</h1>
      <br />Here is an image that was loaded via inline javascript:
      <br />
      <img src={sampleSvgImage} width={500}/>
    </>
  )
}


export default ClientApp;
