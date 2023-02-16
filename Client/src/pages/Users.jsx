import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import UserDetails from "../components/UserDetails";
import UserForm from "../components/UserForm";
import { useUsersContext } from "../hooks/useUsersContext";

const Users = () => {
  const { users, dispatch } = useUsersContext();
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("/api/user");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "GET_USERS", payload: json });
      }
    };
    getUsers();
  }, []);

  const handleEdit = (e) => {
    // console.log("users", e.target.getAttribute("data-id"));
    const newItem =
      users &&
      users.filter((user) => {
        return user._id === e.target.getAttribute("data-id");
      });
    setEditUser({
      id: newItem[0]._id,
      name: newItem[0].name,
      email: newItem[0].email,

      password: "",
      confirm_password: "",
    });
    // console.log(newItem[0]);
  };

  const handleDelete = async (e) => {
    const id = e.target.getAttribute("data-id");
    const response = await fetch("/api/user/" + id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_USER", payload: json });
      setEditUser({
        id: "",
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    }
  };

  // console.log("json", users);
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <div className="row">
            <div className="col-xl-12">
              <PageHeader heading="Users" />
              <div className="container">
                <div className="left">
                  {users &&
                    users.map((user) => (
                      <UserDetails
                        key={user._id}
                        handleEdit={handleEdit}
                        user={user}
                        handleDelete={handleDelete}
                      />
                    ))}
                </div>
                <div className="right">
                  <div className="col-sm-12 col-12">
                    <div className="sidebar-nav-fixed">
                      <UserForm
                        editUser={editUser}
                        // handleClear={handleClear}
                        setEditUser={setEditUser}
                        // handleSubmit={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
