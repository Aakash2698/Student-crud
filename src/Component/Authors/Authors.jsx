import React, { Component } from "react";
import "./Authors.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData, deleteData } from "../../Action/Action";

class Authors extends Component {
  state = {
    Author: [],
    newAuthor: {
      Id: "",
      Book_Id: "",
      First_Name: "",
      Last_Name: "",
    },
  };

  componentDidMount() 
  {
    this.props.getData();
  }
  Delete = (id) => {
    let r = window.confirm("Do you want to delete this Author");
    if (r === true) {
      this.props.deleteData(id);
    }
  };

  render() 
  {
    console.log("get data", this.props.auth.length);

    const list =
      this.props.auth.length !== 0 &&
      this.props.auth.map((auth, index) => {
        return (
          <tr key={auth.ID}>
            <td>{auth.ID}</td>
            <td>{auth.IDBook}</td>
            <td>{auth.FirstName}</td>
            <td>{auth.LastName}</td>
            <td>
              <NavLink exact to={`/UpdateAuthor/${auth.ID}`}>
                <button type="button" className="update">
                  Update
                </button>
              </NavLink>
              <button
                type="button"
                className="delete"
                onClick={() => this.Delete(auth.ID)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });

    return (
      <div>
        <div className="container">
          <h1>Authors</h1>
          <br />
          <NavLink exact to="/ManageAuthor">
            <div className="btn-container">Add Author</div>
          </NavLink>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Book_ID</th>
                <th scope="col">First_Name</th>
                <th scope="col">Last_Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
        </div>
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
      deleteData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
