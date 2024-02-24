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
            <h5 className="text-white car-text">welcome to saving food</h5>
                <h1 className="text-white car-text2">Together we can <br/> Make a <span class="fw-bold">Deffrence.</span></h1>
                <button className="btn-53">
                    <div className="original">Discover more</div>
                    <div className="letters">
                      
                      <span>D</span>
                      <span>i</span>
                      <span>s</span>
                      <span>c</span>
                      <span>O</span>
                      <span>v</span>
                      <span>e</span>
                      <span>r </span>
                      
                      <span>M</span>
                      <span>o</span>
                      <span>r</span>
                      <span>e</span>
                    </div>
                  </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={sec_image}
              className="d-block w-100 image"
              alt="Second Slide"
            />
            <div className="caption d-none d-md-block text-center d-flex">
            <h5 class="text-white car-text">welcome to saving food</h5>
                <h1 class="text-white car-text2">Together we can <br/> Make a <span class="fw-bold">Deffrence.</span></h1>
                <button class="btn-53">
                    <div class="original">Discover more</div>
                    <div class="letters">
                      
                      <span>D</span>
                      <span>i</span>
                      <span>s</span>
                      <span>c</span>
                      <span>O</span>
                      <span>v</span>
                      <span>e</span>
                      <span>r </span>
                      
                      <span>M</span>
                      <span>o</span>
                      <span>r</span>
                      <span>e</span>
                    </div>
                  </button>
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
