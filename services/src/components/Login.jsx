import React from 'react';

import '../styles/login.css';

const Login = () => {
  return (
    <div className="top mt-5">
      <div className="login-card">
        <form>
          {' '}
          <h1>Login</h1>
          <div className="login-from">
            <label>User Name </label>
            <br />
            <input required type="email" />
            <br />
            <label>Password</label>
            <br />
            <input required type="password" />

            <button className="login-button " type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
