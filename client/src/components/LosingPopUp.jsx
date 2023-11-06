import React, {useState} from 'react'


function LosingPopUp(){
   
const [isLosingPopupHidden, SetLosingPopupHidden] = useState(true)
const handleClick = ()=>{
  SetLosingPopupHidden(false)

}

    
  return isLosingPopupHidden ? (
    
    <div className='losing-popup'>
   <div className='losing-popup-content'><button id='close-popup' onClick={handleClick}>✖</button>


<p>Du förlorade! </p>
    
    <button className='losing-popup-button'>Försök igen?</button>
  
    </div>
    
  </div>
  
  ) :null;
}

export default LosingPopUp