import headshot from '../assets/images/headshot_bluecircle.png' 

function PicAndWelcome() {
  return (
    <div className='pic-and-welcome-wrap'>
      <img className='welcome-image' src={headshot} alt="placeholder" />
      <div className='spacer-25px' />
      <div className='welcome-text'>I'm Ryan. Take a look at some of my projects.</div>
    </div>
  );
}
export default PicAndWelcome;