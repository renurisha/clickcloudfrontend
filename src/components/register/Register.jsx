import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { registerUser } from "../../redux/actions/Registeraction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerdata = useSelector((state) => state.register);

  const [loginData, setLoginData] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("login", loginData);
    dispatch(registerUser(loginData));
    if (registerdata.user) {
      alert("register sucefuly");
      navigate("/login");
    } else {
      alert("invalid user");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleRegisterSubmit}>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          name="name"
          onChange={handleChange}
        />
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
        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
};
