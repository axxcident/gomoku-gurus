import React, {useState} from 'react'

function LosingPopUp(){

const [isLosingPopupHidden, SetLosingPopupHidden] = useState(true)
  // const handleClick = ()=>{
  //   SetLosingPopupHidden(false)
  // }

  const goBack = ()=>{
    window.history.back()
  }

  return isLosingPopupHidden ? (
  <div className="dark-bg">
    <div className='losing-popup' data-testid="losing-popup">
      <div className='losing-popup-content'>
        <button id='close-popup' onClick={goBack}>✖</button>
        <p>Du förlorade!</p>
        <button className='losing-popup-button' onClick={goBack}>Försök igen?</button>
      </div>
    </div>
  </div>
  ) :null;
}

export default LosingPopUp
