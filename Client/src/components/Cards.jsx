import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PdfViewer from "./PdfViewer";
import RightNav from "./RightNav";

const Cards = ({ heading, data }) => {
  const ref = useRef(null);

  const handleClick = (e) => {
    const element = document.getElementById(
      "head" + e.target.getAttribute("data-id")
    );
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {data && (
        <div className="dashboard-wrapper">
          <div className="container-fluid dashboard-content">
            <div className="row">
              <div className="col-xl-10">
                <div className="d-flex justify-content-between align-items-center">
                  <PageHeader heading={heading} />
                  <Link to="/new" className="btn btn-primary">
                    Add New
                  </Link>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    {/*============================================================== */}
                    {/*overview */}
                    {/*============================================================== */}
                    <div className="page-section" id="overview">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          {/* <h2>Overview</h2> */}

                          {/* <p className="lead">
                            Nam pulvinar interdum turpis a mattis. Etiam augue
                            leo, mollis a massa sagittis, egestas pretium risus.
                            Aliquam auctor nibh mauris, at fringilla elit
                            lobortis sodales. Praesent volutpat felis et
                            placerat elementum.{" "}
                          </p> */}
                        </div>
                      </div>
                    </div>
                    {/*============================================================== */}
                    {/*end overview */}
                    {/*============================================================== */}
                  </div>
                </div>

                {data?.map((item) => (
                  <div className="row" key={item._id}>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div
                        className="section-block"
                        id={`head${item._id}`}
                        // ref={ref}
                      ></div>
                      <div className="card">
                        <div className="card-header d-flex">
                          <h4 className="mb-0">{item.module}</h4>
                          <div className="dropdown ml-auto">
                            <a
                              className="toolbar"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {" "}
                              <i className="mdi mdi-dots-vertical"></i>{" "}
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="card-body border-top">
                          {/* <h4>{item.subheading}</h4> */}

                          <div className="alert alert-primary" role="alert">
                            <h4 className="alert-heading">{item.sub_module}</h4>
                            <p>{item.desc}</p>
                            <hr />
                            {/* <p className="mb-0">
                            Whenever you need to, be sure to use margin
                            utilities to keep things nice and tidy.
                          </p> */}
                          </div>
                          {/* {PdfViewer} */}
                          <PdfViewer url={item.filename} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="section-block" id="alerts2"></div>
                  <div className="card">
                    <div className="card-header d-flex">
                      <h4 className="mb-0">Card Header</h4>
                      <div className="dropdown ml-auto">
                        <a
                          className="toolbar"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="mdi mdi-dots-vertical"></i>{" "}
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card-body border-top">
                      <h4>Additional Content</h4>
                      <div className="alert alert-primary" role="alert">
                        <h4 className="alert-heading">Well done!</h4>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message. This example text is going to run a bit
                          longer so that you can see how spacing within an alert
                          works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                          Whenever you need to, be sure to use margin utilities
                          to keep things nice and tidy.
                        </p>
                      </div>

                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100"
                              src="../assets/images/card-img-1.jpg"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src="../assets/images/card-img-2.jpg"
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src="../assets/images/card-img-3.jpg"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleIndicators"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>{" "}
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleIndicators"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                <div className="sidebar-nav-fixed">
                  <ul className="list-unstyled">
                    <RightNav data={data} handleClick={handleClick} />
                    {/* {data.map((item, index) => (
                      <li key={index} rel={index}>
                        <a
                          href={`#head${item.id}`}
                          className={index == 0 ? "active" : ""}
                        >
                          {item.subheading}
                        </a>
                      </li>
                    ))} */}
                    {/* <li>
                    <a href="#overview" className="active">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#buttons">Buttons</a>
                  </li>
                  <li>
                    <a href="#color">Color</a>
                  </li>
                  <li>
                    <a href="#alerts1">Alerts1</a>
                  </li>
                  <li>
                    <a href="#alerts2">Alerts2</a>
                  </li>
                  <li>
                    <a href="#badges">Badges</a>
                  </li>
                  <li>
                    <a href="#tooltip">Tooltip</a>
                  </li>
                  <li>
                    <a href="#modal">Modal</a>
                  </li>
                  <li>
                    <a href="#pagination">Paginations</a>
                  </li>
                  <li>
                    <a href="#images">Images</a>
                  </li>
                  <li>
                    <a href="#pro-bars">Progress Bars</a>
                  </li>
                  <li>
                    <a href="#loader">Loader</a>
                  </li>
                  <li>
                    <a href="#top">Back to Top</a>
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Cards;
