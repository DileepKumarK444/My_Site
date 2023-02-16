import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
// import Header from "./components/Header";
import Layout from "./components/Layout";
// import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import "./style.css";
import NewPage from "./pages/NewPage";
import Main from "./pages/Main";
export const UserContext = React.createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "main/:id",
        element: <Main />,
      },
      {
        path: "user",
        element: <Users />,
      },
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    // <UserContext.Provider value={menu}>
    <div className="dashboard-main-wrapper">
      <RouterProvider router={router} />
    </div>
    // </UserContext.Provider>
  );
}

export default App;
