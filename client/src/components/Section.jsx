import React from "react";
import Playbutton from "../components/PlayButton"

const Section = () => {
return (
    <div className="main-content">
      <div className="hero-text">
        <h3>
            Omuku –  <br/>
            Där Strategi Möter Spänning och Skicklighet!"
        </h3>
        <h5>
        Utforska Ditt Strategiska Skicklighet <br/>
        i Det Perfekta Omoku-Äventyret!
        </h5>
      </div>
      <Playbutton/>
      
       {/* <div>
        <input className="start-button"  type="button" value="Börja spela" />
      </div> */}
    </div>
)}

export default Section;
