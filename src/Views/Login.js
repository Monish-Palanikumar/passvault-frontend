import React from 'react'

function Login() {
     return (
          <div id="sect">
               <form className="login-form grid" method="post">
                    <div className="login-inputs grid">
                         <div className='login-content'>
                              <label htmlFor='' className='login-label'>Username</label>
                              <input type="text" className="login-input" />
                         </div>
                         <div className='login-content'>
                              <label htmlFor='' className='login-label'>Master Password</label>
                              <input type="text" className="login-input" />
                         </div>
                    </div>
               </form>
          </div>
     )
}

export default Login