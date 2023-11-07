import React from 'react'
import { Link } from 'react-router-dom';
function PlayButton() {
  return (
    <>
    <div>
      <Link to="/spelSida"> <button className='start-button'>Börja spela</button></Link>
    </div>
    </>
  )
}

export default PlayButton
