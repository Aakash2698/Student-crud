import React, { Component } from "react";
import "./UpdateAuthor.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateData, getData } from "../../Action/Action";

class UpdateAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      IDBook: "",
      FirstName: "",
      LastName: "",
    };
  }
  componentDidMount() {
    fetch(
      "https://fakerestapi.azurewebsites.net/api/Authors/" +
        this.props.match.params.id
    ).then((response) => {
      response.json().then((result) => {
        console.warn(result);
        this.setState({
          ID: result.ID,
          IDBook: result.IDBook,
          FirstName: result.FirstName,
          LastName: result.LastName,
        });
      });
    });
  }
  Update = () => {
    const { ID, IDBook, FirstName, LastName } = this.state;
    const updContact = {
      ID,
      IDBook,
      FirstName,
      LastName,
    };
    this.props.updateData(ID, updContact);
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() 
  {
    const { ID, IDBook, FirstName, LastName } = this.state;
    console.warn(this.props.match.params.id);
    return (
      <div className="container">
        <h2>Update Author</h2>
        <br />
        <label htmlFor="id">ID</label>
        <input
          type="text"
          className="form-control"
          name="ID"
          disabled
          value={ID}
          onChange={this.onChange}
        />

        <label htmlFor="id">Book ID</label>

        <input
          type="text"
          className="form-control"
          name="IDBook"
          value={IDBook}
          onChange={this.onChange}
        />

        <label htmlFor="id">First Name</label>

        <input
          type="text"
          className="form-control"
          name="FirstName"
          value={FirstName}
          onChange={this.onChange}
        />

        <label htmlFor="id">Last Name</label>

        <input
          type="text"
          className="form-control"
          name="LastName"
          value={LastName}
          onChange={this.onChange}
        />

        <br />
        <br />

        <button
          className="button"
          onClick={() => {
            this.Update();
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.authorData.authors,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getData,
      updateData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAuthor);
