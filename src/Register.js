import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", data)
      .then((res) => alert(res.data));
  };
  return (
    <div>
      <center>
        <h3>Register</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
          />
          <br />
          <input type="submit" value="Register" />
          <br />
        </form>
      </center>
    </div>
  );
};

export default Register;
