import React from 'react'

function Landing() {
     return (
          <div id="landing-section">
               <div className='container'>
                    <h1><span className='text-danger'>Effortless password management</span>,<br />Now in your fingertips !</h1>
                    <a className="button button-full" href='http://localhost:3000/login'>Login</a>
                    <a className="button button-full" href='http://localhost:3000/signup'>Signup</a>
               </div>
          </div>
     )
}

export default Landing