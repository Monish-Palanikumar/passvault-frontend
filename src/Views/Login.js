import React from 'react'

function Login() {
     return (
          <div id="sect login-section" className='container'>
               <h1 className='text-center title'>Login Now !!</h1>
               <form className="login-form grid" method="post">
                    <div className="login-inputs grid">
                         <div className='login-content'>
                              <label htmlFor='' className='login-label'>Username</label>
                              <input type="text" className="login-input" />
                         </div>
                         <div className='login-content'>
                              <label htmlFor='' className='login-label'>Master Password</label>
                              <input type="password" className="login-input" />
                         </div>
                    </div>
                    <div>
                         {/* TODO Insert link */}
                         <a href="http://localhost:3000/dashboard" className="button button-full button--flex">
                              Get Access !
                         </a>
                    </div>
               </form>
          </div>
     )
}

export default Login