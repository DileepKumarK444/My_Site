import React from "react";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"; // import EditIcon from "@mui/icons-material/Edit";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { format } from "date-fns";
// import { useUsersContext } from "../hooks/useUsersContext";

const UserDetails = ({ user, handleEdit, handleDelete }) => {
  // const { dispatch } = useUsersContext();

  return (
    <>
      <div className="user-details">
        <div className="user-content">
          Name: <span>{user.name}</span>
          <p>Email: {user.email}</p>
          <p>
            Created On:{format(new Date(user.createdAt), "yyyy/MM/dd")} |
            Updated On:{format(new Date(user.updatedAt), "yyyy/MM/dd")}
          </p>
        </div>
        <div className="user-action">
          <i
            className="m-r-10 mdi mdi-delete"
            data-id={user._id}
            onClick={handleDelete}
          ></i>
          <i
            className="m-r-10 mdi mdi-lead-pencil"
            data-id={user._id}
            onClick={handleEdit}
          ></i>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
