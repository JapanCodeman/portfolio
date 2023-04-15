import React from 'react';

function PicAndWelcome() {
  return (
    <div className='pic-and-welcome-wrap'>
      <img className='welcome-image' src='https://placehold.jp/250x25p.png' alt="placeholder" />
      <div className='spacer-25px' />
      <div className='welcome-text'>I'm Ryan. Take a look at some of my projects.</div>
    </div>
  );
}
export default PicAndWelcome;