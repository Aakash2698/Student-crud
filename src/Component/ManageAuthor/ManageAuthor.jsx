import React, { Component } from "react";
import "./ManageAuthor.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { insertData } from "../../Action/Action";

class ManageAuthor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ID: "",
      IDBook: "",
      FirstName: "",
      LastName: "",
    };
  }
  onSubmit = () => {
    const { ID, IDBook, FirstName, LastName } = this.state;
    const newContact = {
      ID,
      IDBook,
      FirstName,
      LastName,
    };
    this.props.insertData(newContact);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { ID, IDBook, FirstName, LastName } = this.state;
    return (
      <div className="container">
        <h2>Manage Author</h2>
        <br />
        <div class="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            name="ID"
            value={ID}
            onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="FirstName">Book ID</label>
          <input
            type="text"
            className="form-control"
            name="IDBook"
            value={IDBook}
            onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="LastName">First Name</label>
          <input
            type="text"
            className="form-control"
            name="FirstName"
            value={FirstName}
            onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="age">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="LastName"
            value={LastName}
            onChange={this.onChange}
          />
        </div>
        <button
          className="button"
          onClick={() => {
            this.onSubmit();
          }}
        >
          Save
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // auth: state.authorData.authors,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      insertData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthor);
