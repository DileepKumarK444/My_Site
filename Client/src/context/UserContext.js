import { createContext, useReducer } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        users: action.payload,
      };
    case "CREATE_USER":
      return {
        users: [action.payload, ...state.users],
      };
    case "UPDATE_USER":
      return {
        users: action.payload,
      };
    case "DELETE_USER":
      // console.log("state.users", state.users);
      // console.log(
      //   "action.payload",
      //   state.users.filter((u) => u._id !== action.payload._id)
      // );
      return {
        users: state.users.filter((u) => u._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    users: null,
  });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
