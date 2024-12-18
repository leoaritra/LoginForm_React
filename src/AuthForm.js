import React, { useState } from 'react'

export default function AuthForm() {
const [inLogin , setInLogin] = useState(true);
  return (
        <div className='container'>
          <div className='form-container'>
            <div className='form-toggle'>
              <button className={inLogin ? 'active' : ""}onClick={() =>setInLogin(true)}>Login</button>
              <button className={!inLogin ? 'active': ""}onClick={() =>setInLogin(false)}>SignUp</button>
            </div>
            {inLogin ? (
          <>
            <div className="form">
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <button className="link" onClick={() => alert('Forgot Password?')}>
                Forgot Password
              </button>
              <p>
                Not a Member?{' '}
                <button className="link" onClick={() => setInLogin(false)}>
                  Sign In
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button className="link" onClick={() => setInLogin(true)}>
                Already a Member?
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}