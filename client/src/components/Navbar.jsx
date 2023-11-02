import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ openModal }) => {

    const testclick = () => {
        const dropdownContent = document.getElementById('dropdownContent');
        if (dropdownContent.style.display === 'none' || !dropdownContent.style.display) {
          dropdownContent.style.display = 'block';
        } else {
          dropdownContent.style.display = 'none';
        }
      };


  return (
    <nav className='navbar'>
      <Link to="/" className="logonav">
        <img src="/GG_BW.png" alt="gomoku logo" />
      </Link>
        <ul className="navigation-links">
          <li id='dropdown' onClick={testclick}>
            <button>
             Spelregler
            </button>
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.49625 14.0456L0.418725 4.85624C-0.139575 4.22109 -0.139575 3.19405 0.418725 2.56566L1.76102 1.03861C2.31932 0.40347 3.2221 0.40347 3.77446 1.03861L9.5 7.55223L15.2255 1.03861C15.7838 0.40347 16.6866 0.40347 17.239 1.03861L18.5813 2.56566C19.1396 3.20081 19.1396 4.22785 18.5813 4.85624L10.5038 14.0456C9.95733 14.6807 9.05455 14.6807 8.49625 14.0456Z" fill="white"/>
            </svg>
            <div id="dropdownContent">
                <p class='game-rules'>
                    Fem i rad är ett strategiskt brädspel med
                    enkla regler som spelare i alla åldrar kan
                    njuta av.
                </p>
                <p class='game-rules'>
                    Målet med spelet är att vara den första
                    som bygger upp till fem i rad horisontell,
                    vertikal eller diagonal  på din bräda
                    genom att placera fem brickor  i rad
                </p>
            </div>
          </li>
          <li>
            <Link to="/about">Om spelet</Link>
          </li>
          <li>
            <Link to="/contact">Kontakta oss</Link>
          </li>
          <li>
        <button onClick={openModal}>Logga in</button>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
