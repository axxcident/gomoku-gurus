import React, {useState} from 'react'


function WinningPopUp(){

const [isWinningPopUpHidden, SetWinningPopUpHidden] = useState(true)
const handleClick = ()=>{
  SetWinningPopUpHidden(false)

}


  return isWinningPopUpHidden ? (

    <div className='winning-popup' data-testid="winner-popup">
   <div className='winning-popup-content'><button id='close-winning-popup' onClick={handleClick}>✖</button>


<p>Du vann! </p>

    <button className='winning-popup-button'>Spela igen?</button>

    </div>

  </div>

  ) :null;
}

export default WinningPopUp
