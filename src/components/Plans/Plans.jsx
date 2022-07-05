import React from 'react'
import './Plan.css'
import { plansData} from '../../data/plans/plansData'

const Plans = () => {
  return (
   <div className="plans-contanier">
    <div className="programs-header" style={{gap:'2rem'}}>
        <span className='stroke'>READY TO START</span>
        <span>YOUR JOUNER</span>
        <span className='stroke'>NOW WITHUS</span>
    </div>
    <div className="plans">
        {plansData.map((plan,i) =>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span> $ {plan.price}</span>
                
                <div className="feat">
                {plan.features.map((feat,i)=>(
                <div className="featu">
                    <img src="tick.png" alt="" />
                    <span key={i}>{feat}</span>
                </div>

            ))}

        </div>

        <div>
            <span> SEE More --> </span>
            <button className='btn'>JOIN NOW </button>
        </div>


            </div>
        ))}
        
    </div>

   </div>
  )
}

export default Plans