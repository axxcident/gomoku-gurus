import React, { useState } from "react";
/* import PlayButton from "../components/PlayButton"; */

function App() {
  const [formData, setFormData] = useState({
    namn: "",
    epost: "",
    meddelande: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*  */
    console.log("Form data submitted:", formData);
    setShowPopup(true);
    setFormSubmitted(true);
  };

  return (
    <>
           <div>
              <h1 className={`text-contact ${formSubmitted ? "form-submitted" : ""}`}>Kontakta oss</h1>


              <form
            className={`contact-form ${formSubmitted ? "form-submitted" : ""}`}
            onSubmit={handleSubmit}
          >
                  <label htmlFor="namn">Namn</label>
                  <input className="input-form"
                      type="text"
                      id="namn"
                      name="namn"
                      value={formData.namn}
                      onChange={handleChange}
                      required />

                  <label htmlFor="epost">Epost</label>
                  <input className="input-form"
                      type="email"
                      id="epost"
                      name="epost"
                      value={formData.epost}
                      onChange={handleChange}
                      required />

                  <label htmlFor="meddelande">Meddelande</label>
                  <textarea className="input-form"
                      id="meddelande"
                      name="meddelande"
                      value={formData.meddelande}
                      onChange={handleChange}
                      required
                  ></textarea>

                  <button className="form-btn" type="submit">Skicka</button>
              </form>
              {showPopup && (
          <div className="popup">
            <p>Tack för att du kontaktar oss. Vi hör av oss så snart vi kan!</p>
            {/* <button onClick={() => setShowPopup(false)}>Close</button> */}
          </div>
        )}
{/*               <div className="playbutton-about">
                  <PlayButton />
              </div> */}
          </div></>
  );
}

export default App;
