import React, { Component } from "react";
import "./AddAuthor.scss";
import ManageAuthor from "../ManageAuthor/ManageAuthor";

class AddAuthor extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <ManageAuthor />;
  }
}
export default AddAuthor;
