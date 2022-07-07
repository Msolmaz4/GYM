import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className="Join" id="join-us">
        <div className="rwar">
            <hr />
            <div>
                <span>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span>WITH US</span>
            </div>

        </div>
        <div className="lwar">
            <form action="" className="email-container">
                <input type="email"  name='user_name' placeholder='Enter your email' />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join