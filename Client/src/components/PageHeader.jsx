import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
// import { commonContext } from "../context/userContext";

const PageHeader = ({ heading }) => {
  // const { menu } = useContext(commonContext);
  const id = useParams();
  return (
    <>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="page-header">
            <h2 className="pageheader-title">{heading}</h2>

            {/* <p className="pageheader-text">
              Proin placerat ante duiullam scelerisque a velit ac porta, fusce
              sit amet vestibulum mi. Morbi lobortis pulvinar quam.
            </p> */}
            {/* <div className="page-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#" className="breadcrumb-link">
                      Dashboard
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" className="breadcrumb-link">
                      Pages
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blank Pageheader
                  </li>
                </ol>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
