import React from 'react'

function Landing() {
     return (
          <div id="landing-section">
               <div className='container'>
                    <h1><span className='light'>Effortless password management</span>,<br /><span className="dark">Now in your fingertips !</span></h1>
                    {/* TODO Change links */}
                    <a className="button button-full" href='http://localhost:3000/login'>Login</a>
                    <a className="button button-full" href='http://localhost:3000/signup'>Signup</a>
               </div>
          </div>
     )
}

export default Landing