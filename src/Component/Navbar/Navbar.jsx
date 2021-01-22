import React, { Component } from "react";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Authors">Authors</a>
            </li>
            <li>
              <a href="/AddAuthor">Add Authors</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
