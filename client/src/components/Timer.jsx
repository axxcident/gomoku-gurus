import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (time >= 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // increase time when the timer starts
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [time]);
   //formatera tiden i minuter och sekunder
 const minutes = Math.floor(time/60)
 const seconds= time % 60;
 const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}`;

   // Funktion för att stoppa timern när spelet är över (vi behöver funktion för att avgöra om spelet är klart
  //  const stopTimer = () => {
  //   setTime(-1); // ställ in timern för negativ värde för att stoppa den
  // };

  return (
    <p>
      {formattedTime}
    </p>
  );
}

export default Timer;
