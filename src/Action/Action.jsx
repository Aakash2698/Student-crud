import { DISPLAY_AUTHOR } from "../ActionType/ActionType";
import { ADD_AUTHOR } from "../ActionType/ActionType";
import { UPDATE_AUTHOR } from "../ActionType/ActionType";
import { DELETE_AUTHOR } from "../ActionType/ActionType";

export const getData = () => 
{
  return async (dispatch) => {
    const url = "https://fakerestapi.azurewebsites.net/api/Authors";
    const response = await fetch(url);
    const data = await response.json();
    console.log("Fetch data :-", data);
    dispatch({
      type: DISPLAY_AUTHOR,
      payload: data,
    });
  };
};
export const insertData = (data) => {
  const value = data;
  return async (dispatch) => {
    const url = "https://fakerestapi.azurewebsites.net/api/Authors";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await response.json();
    console.log("Fetch data :-", data);
    dispatch({
      type: ADD_AUTHOR,
      payload: data,
    });
  };
};
export const updateData = (ID, data) => {
  const value = data;
  console.log("id", ID, data);

  return async (dispatch) => {
    const url = "https://fakerestapi.azurewebsites.net/api/Authors/" + ID;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await response.json();
    console.log("Fetch data :-", data);
    dispatch({
      type: UPDATE_AUTHOR,
      payload: data,
    });
  };
};

export const deleteData = (ID) => {
  return async (dispatch) => {
    const url = "https://fakerestapi.azurewebsites.net/api/Authors/" + ID;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({
      type: DELETE_AUTHOR,
      payload: data,
    });
  };
};
