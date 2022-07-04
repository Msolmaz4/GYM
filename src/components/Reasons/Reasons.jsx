import React from 'react'
import './Reasons.css'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src="image1.png" alt="" />
            <img src="image2.png" alt="" />
            <img src="image3.png" alt="" />
            <img src="image4.png" alt="" />
        </div>
         <div className="right-r">
          <span>some reasons</span>
          <div>
            <span className='stroke'>Why</span>
            <span> Choose us</span>
          </div>

            <div className='details-r'>
            <div><img src="tick.png" alt=""></img>
            <span> OVER 140+ EXPERT COACH</span>
            </div>
            <div><img src="tick.png" alt="" />
            <span>TRAIN SMARTER</span>
            </div>
            <div><img src="tick.png" alt="" />
            <span>1 FREE PROGRAM</span>
            </div>
            <div><img src="tick.png" alt="" />
            <span>RELIABLE PATNERS</span>
            </div>
            </div>
            <span style={{
              color:'gray',
              fonWeight:'normal'

            }}>
              OURS PATNERS
            </span>
            <div className="partners">
              <img src="nb.png" alt="" />
              <img src="nike.png" alt="" />
              <img src="adidas.png" alt="" />
              </div>
          </div>
    </div>
  )
}

export default Reasons