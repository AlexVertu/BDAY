import React from 'react'
import SectionWrapper from './SectionWrapper'
import "../assets/css/present.css";

import bunga from "../assets/bunga.png";
import boneka from "../assets/boneka.png";
import gambar from "../assets/gambar.png";

function Present() {
  return (
    <SectionWrapper>
      <div className="mb-64">
        <h1 className="absolute -top-[7rem] left-0 right-0 text-center flex items-center justify-center text-xl font-extrabold text-customBlue drop-shadow-lg">
          Open the box and find your gifts!
        </h1>
      </div>

      <div className="birthday-gift">
        <input id="click" type="checkbox" />

        <label className="gift" htmlFor="click">
          <div className="gift-top"></div>
          <div className="gift-bottom"></div>

          <div className="gift-item gift-item-1">
            <img src={bunga} alt="Bunga" />
          </div>

          <div className="gift-item gift-item-2">
            <img src={boneka} alt="Boneka" />
          </div>

          <div className="gift-item gift-item-3">
            <img src={gambar} alt="Gambar" />
          </div>
        </label>
      </div>
      
    </SectionWrapper>
  )
}

export default Present