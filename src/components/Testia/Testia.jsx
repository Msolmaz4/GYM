import React, { useState } from 'react'
import './testia.css'

const Testia = () => {

const [select,setSelect] = useState(0)


  return (
    <div className="testia1">
        <div className="sol">
            <span>TEST</span>
            <span className='stroke'>WHAT THEY</span>
            <span>say ABOUT US</span>
        </div>
        <div className="sag"></div>
    </div>
  )
}

export default Testia