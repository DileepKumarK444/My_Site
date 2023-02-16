import React from "react";
import { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext";

const UserForm = ({ editUser, setEditUser }) => {
  const { users, dispatch } = useUsersContext();

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setEditUser({
      id: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editUser.id) {
      const id = editUser.id;
      delete editUser.confirm_password;
      delete editUser.id;
      const response = await fetch(`/api/user/${id}`, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editUser), // body
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "UPDATE_USER", payload: json });
        setEditUser({
          id: "",
          name: "",
          email: "",
          password: "",
          confirm_password: "",
        });
      }
    } else {
      delete editUser.confirm_password;
      const response = await fetch("/api/auth/signup", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editUser), // body
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "CREATE_USER", payload: json });
        setEditUser({
          id: "",
          name: "",
          email: "",
          password: "",
          confirm_password: "",
        });
      }
      // };
    }
    // console.log(editUser.id);
  };
  return (
    <>
      <div className="card">
        <h5 className="card-header">User Form</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="col-form-label">Name</label>
              <input
                id="inputText3"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="form-control"
                value={editUser.name}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                id="inputEmail"
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="name@example.com"
                className="form-control"
                value={editUser.email}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                id="inputPassword"
                type="password"
                name="password"
                //   name="email"
                value={editUser.password}
                onChange={handleChange}
                placeholder="Password"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                id="confirm_password"
                type="password"
                value={editUser.confirm_password}
                //   name="confirm_password"
                name="confirm_password"
                onChange={handleChange}
                placeholder="Confirm Password"
                className="form-control"
              />
            </div>
            <div className="form-group btn-div">
              <button
                type="button"
                className="btn btn-outline-warning"
                onClick={handleClear}
              >
                Clear
              </button>
              <button type="submit " className="btn btn-outline-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
