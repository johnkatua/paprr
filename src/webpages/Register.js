import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../services/paperApi";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [registerUser, { data, isError, error }] = useRegisterUserMutation();
  console.log(data);


  useEffect(() => {
    if (data && data) {
      localStorage.setItem('user', JSON.stringify({
        user: true,
        details: data.data.name
      }));
      setName('');
      setEmail('');
      setPassword('');
      navigate('/');
    }
    if (isError) {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [data, isError, navigate])

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    await registerUser({ name, email, password });
  };


  return (
    <div className="register--wrapper">
      {error && <p>{error.data.msg.code}</p>}
      <div className="register--container">
        <form onSubmit={handleRegisterUser}>
          <div className="register--container__details">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
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
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="register--wrapper__links">
        <button onClick={() => navigate("/")}>Back to Homepage</button>
        <button onClick={() => navigate("/login")}>Already have an account</button>
      </div>
    </div>
  );
};

export default Register;
