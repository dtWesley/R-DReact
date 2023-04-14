import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Boot() {
  return (
    <div className="container center ">
      <div className="row">
        <li>
          <NavLink to="/mail">Mail</NavLink>
        </li>
        <li>
          <NavLink to="/upload">Upload Image</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
      </div>
      <div className="row mt-5 w-25">
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
      </div>
    </div>
  );
}

export default Boot;
