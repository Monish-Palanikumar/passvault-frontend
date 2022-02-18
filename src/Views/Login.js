import React, { useState } from 'react'

function Login() {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const handleSubmit = (e) => {
          e.preventDefault();
          if (username === '' || password === '') {
               alert("Missing username/password");
          }
          else {
               // both values entered
          }
     }
     return (
          <div id="sect login-section" className='container'>
               <h1 className='text-center title'>Login Now !!</h1>
               <form className="login-form grid" method="post">
                    <div className="login-inputs grid">
                         <div className='login-content'>
                              <label htmlFor='username' className='login-label'>Username</label>
                              <input id="username" type="text" className="login-input" value={username} onChange={(e) => setUsername(e.target.value)} />
                         </div>
                         <div className='login-content'>
                              <label htmlFor='password' className='login-label'>Master Password</label>
                              <input id="password" type="password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                         </div>
                    </div>
                    <div>
                         <button className='button button-full button--flex' onClick={handleSubmit}>Get Access !</button>
                    </div>
               </form>
          </div>
     )
}

export default Login