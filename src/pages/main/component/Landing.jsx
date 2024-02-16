import React from "react";
import "../style/landing.css";
import first_image from "./pics/first.jpg";
import sec_image from "./pics/second.jpg";

export default function Landing() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={first_image}
              className="d-block w-100 h-75 image"
              alt="First Slide"
            />
            <div className="caption d-none d-md-block text-center d-flex">
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={sec_image}
              className="d-block w-100 image"
              alt="Second Slide"
            />
            <div className="caption d-none d-md-block text-center d-flex">
              {/* Your caption content */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
