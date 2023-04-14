import React, { useState } from "react";
import { getAdd, getTest } from "./Service";
import { NavLink } from "react-router-dom";

function TestService() {
  const [postResult, setpostResult] = useState("");
  const [getResult, setgetResult] = useState("");

  const testPost = async () => {
    const temp = "hello";
    const result = await getAdd(temp);
    if (result) {
      setpostResult(result);
    }
  };

  const testGet = async () => {
    const result = await getTest();
    if (result) {
      setgetResult(result);
    }
  };

  const clear = () => {
    setgetResult("");
    setpostResult("");
  };

  return (
    <div className="container">
      <li>
        <NavLink to="/">Back</NavLink>
      </li>
      <h4>This is result of POST: {postResult}</h4>
      <h4>This is result of GET: {getResult}</h4>

      <button onClick={testPost}>Test Post request</button>
      <button onClick={testGet}>Test Get request</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default TestService;
