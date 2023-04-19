function NameEntry() {

  return (
    <div className='name-entry-wrap'>
      <div className='name-entry-card'>
        <div className='name-entry-card-front'>
          <h1>Player 1, enter your name!</h1>
          <input className='player-one-name-entry'/>
        </div>

        <div className='name-entry-card-back' style={{visibility: "hidden"}}>
          <h1>Player 2, enter your name!</h1>
        </div>
      </div>
    </div>
  )
}
export default NameEntry;