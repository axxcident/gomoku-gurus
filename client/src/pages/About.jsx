import React from "react";
import PlayButton from "../components/PlayButton";


function App () {
    return (
        <div className='about-page'>
           <button className='arrow-button'>&#129136;</button>
           <div className='about-text'>
            <p className='title-about'>
                Spelets ursprung
            </p>
            <p>
                Gomoku sägs ha sitt ursprung i Kina med namnet Wu Zi Qi (五子棋). Namnet "Gomoku"
                kommer från det japanska språket, där det kallas gomokunarabe (五目並べ). Go betyder
                fem, moku är ett motord för pjäser och narabe betyder uppställning. Spelet är även
                populärt i Korea, där det kallas omok (五目) som har samma struktur och ursprung som
                det japanska namnet. På 1800-talet introducerades spelet till Storbritannien där det var
                känt som Go Bang, sägs vara en förvanskning av det japanska ordet goban, som sägs
                vara adopterat från kinesiska k'i pan (qí pán) "schackbräde".
            </p>
           </div>
           <div className='playbutton-about'>
           <PlayButton></PlayButton>
           </div>
        </div>
    )
}

export default App
