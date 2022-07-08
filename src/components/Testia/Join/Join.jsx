import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cujqktt', 'template_37k83vh', form.current, '_XCizgVjsdyx1g_-Q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

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
            <form ref={form} onSubmit={sendEmail} action="" className="email-container">
                <input type="email"  name='user_name' placeholder='Enter your email' />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join