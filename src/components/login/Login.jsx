import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { loginUser } from "../../redux/actions/loginAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const fetchedlogin = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("login", loginData);
    dispatch(loginUser({ ...loginData }));
    if (fetchedlogin.login) {
      alert("login successful");
      navigate("/");
    } else {
      alert("invalid user");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit}>
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <TextField
          name="password"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};
