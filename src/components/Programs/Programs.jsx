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
                    <div>
                    {program.image}
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