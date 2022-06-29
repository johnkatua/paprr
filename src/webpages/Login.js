import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/paperApi";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginUser, { data, isError, error }] = useLoginUserMutation();

  useEffect(() => {
    if (data && data.accessToken) {
      localStorage.setItem('login', JSON.stringify({
        userLogin: true,
        token: data.accessToken
      }));
      setEmail('');
      setPassword('');
      navigate('/');
    }
    if(isError) {
      setEmail('');
      setPassword('');
    }
  }, [data, isError, error, navigate]);

  const userLogin = async (e) => {
    e.preventDefault();
    await loginUser({ email, password });
  };
  return (
    <div className="register--wrapper">
      {error && <p>{error.data.msg}</p>}
      <div className="login--container">
        <form onSubmit={userLogin}>
          <div className="register--container__details">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="register--container__details">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="register--wrapper__links">
        <button onClick={() => navigate("/")}>Back to Homepage</button>
        <button onClick={() => navigate("/register")}>I do not have an account</button>
      </div>
    </div>
  );
};

export default Login;
