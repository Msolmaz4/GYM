import React, { useState } from 'react'
import './testia.css'
import {testimonialsData} from '../../data/test/test'

const Testia = () => {

const [select,setSelect] = useState(0)
const tLeghnt =testimonialsData.length


  return (
    <div className="testia1">
        <div className="sol">
            <span>TEST</span>
            <span className='stroke'>WHAT THEY</span>
            <span>say ABOUT US</span>
            <span>{testimonialsData[select].review}</span>
            <span>
            <span style={{color:'orange'}}>{testimonialsData[select].name} </span>{''}
              - {testimonialsData[select].status} </span>
        </div>
        <div className="sag">
          <div></div>
          <div></div>
          <img src={testimonialsData[select].image} alt="" />
          <div className="arrows">
            
            <img 
            onClick={()=>{
              select === 0
              ? setSelect(tLeghnt-1)
              : setSelect((prev)=> prev-1)
            }}
            
            src="leftArrow.png" alt="" />
            <img 
            onClick={()=>{
              select === tLeghnt - 1
              ? setSelect(0)
              : setSelect((prev)=>prev+1)
            }}
            
            src="rightArrow.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Testia