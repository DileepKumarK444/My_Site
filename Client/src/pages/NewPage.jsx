import React, { useState } from "react";
import { useEffect } from "react";

const NewPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("/api/language");
      const json = await response.json();
      if (response.ok) {
        // dispatch({ type: "GET_USERS", payload: json });
        console.log(json);
        setData(json);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <div className="row">
            <div className="col-xl-10">
              {/* <PageHeader heading={heading} /> */}
              <h1>NewPage</h1>

              <div className="row">
                <div className="card" style={{ width: "70%" }}>
                  <h5 className="card-header">User Form</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label className="col-form-label">Name</label>
                        <select className="form-control">
                          {data?.map((item) => (
                            <option key={item._id}>{item.title}</option>
                          ))}
                        </select>
                        {/* <input
                          id="inputText3"
                          type="text"
                          name="name"
                          placeholder="Name"
                          // onChange={handleChange}
                          className="form-control"
                          // value={editUser.name}
                        /> */}
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          id="inputEmail"
                          type="email"
                          name="email"
                          // onChange={handleChange}
                          placeholder="name@example.com"
                          className="form-control"
                          // value={editUser.email}
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          id="inputPassword"
                          type="password"
                          name="password"
                          //   name="email"
                          // value={editUser.password}
                          // onChange={handleChange}
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          id="confirm_password"
                          type="password"
                          // value={editUser.confirm_password}
                          //   name="confirm_password"
                          name="confirm_password"
                          // onChange={handleChange}
                          placeholder="Confirm Password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group btn-div">
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                          // onClick={handleClear}
                        >
                          Clear
                        </button>
                        <button
                          type="submit "
                          className="btn btn-outline-success"
                        >
                          Save
                        </button>
                      </div>
                    </form>
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

export default NewPage;
