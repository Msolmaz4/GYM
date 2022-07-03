import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsdata/programsdata'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className='stroke'>Expore our</span>
            <span>Programs</span>
            <span className='stroke'>to shape you</span>
        </div>
        <div className='program-cate'>
            {programsData.map(program=>{
                return(
                    <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join">
                        <span>Join Now<img src='right.png' alt=''></img></span>
                    </div>
                </div>    
                )
            }
                   
                )

                
            }
        </div>
    </div>
  )
}

export default Programs