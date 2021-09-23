import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { store } from "./App";
import { Redirect } from "react-router-dom";

const Myprofile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      {data && (
        <center>
          <h3>Welcome User : {data.username}</h3>
          <br />
          <button onClick={() => setToken(null)}>Logout</button>
        </center>
      )}
    </div>
  );
};

export default Myprofile;
