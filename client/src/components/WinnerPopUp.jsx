import React, {useState} from 'react'

function WinningPopUp(){

  const [isWinningPopUpHidden, SetWinningPopUpHidden] = useState(true)
  // const handleClick = ()=>{
  //   SetWinningPopUpHidden(false)
  // }

  const goBack = ()=>{
    window.history.back()
  }

  return isWinningPopUpHidden ? (
  <div className="dark-bg">
    <div className='winning-popup' data-testid="winner-popup">
      <div className='winning-popup-content'>
        <button id='close-winning-popup' onClick={goBack}>✖</button>
        <p>Du vann!</p>
        <button className='winning-popup-button' onClick={goBack}>Spela igen?</button>
      </div>
    </div>
  </div>
  ) :null;
}

export default WinningPopUp
