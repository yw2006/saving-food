import React from "react";
import "../style/Donate.css";
import { Carousel } from "react-bootstrap";
import leavs from "./pics/leaves.jpg"
import { useState } from "react";
import { Link } from "react-router-dom";

function Donate() {
  const [donationAmount, setDonationAmount] = useState("");

  const handleBtnClick = (amount) => {
    setDonationAmount(amount);
  };

  const handleCustomBtnClick = () => {
    setDonationAmount("");
  };

  const imgStyle = {
    width: "10%",
    marginRight: "10px",
  };

  return (
    <div className="container-fluid mb-5">
      <div class="content-container">
        <img src={leavs} alt="Background Image" class="background-image" />

        <div className="first  row">
          <div className="donation-form m-4">
            <h1 className="row">Make a Donation</h1>
            <p>
              Nostra dapibus varius et semper semper rutrum ad risus felis eros
              majority have suffered alteration
            </p>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>

              <input
                type="text"
                aria-label="Amount (to the nearest dollar)"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>

            <a
              href="#"
              className="btn d-btn"
              onClick={(e) => {
                e.preventDefault();
                handleBtnClick(50);
              }}
            >
              50
            </a>
            <a
              href="#"
              className="btn d-btn"
              onClick={(e) => {
                e.preventDefault();
                handleBtnClick(100);
              }}
            >
              100
            </a>
            <a
              href="#"
              className="btn d-btn"
              onClick={(e) => {
                e.preventDefault();
                handleBtnClick(200);
              }}
            >
              200
            </a>
            <a
              href="#"
              className="btn d-btn"
              onClick={(e) => {
                e.preventDefault();
                handleBtnClick(500);
              }}
            >
              500
            </a>
            <a
              href="#"
              className="btn d-btn"
              onClick={(e) => {
                e.preventDefault();
                handleCustomBtnClick();
              }}
            >
              Custome
            </a>
            <Link to="/donation"  state={{donationAmount:donationAmount}} className="btn b-btn">
              donation
            </Link>
          </div>
          <div className="sec ">
            <h1 className="heading">
              Let’s Together Protect and Enhance Environment for our Future
              Generation
            </h1>
          </div>
          <Link to="/donation"
            type="button"
            className="btn btn-outline-warning text-light  start-btn  "
            style={{
              borderRadius: "100px",
              marginLeft: "180px",
              width: "160px",
              marginTop: "10px",
              height: "60px",
            }}
          >
            Start Donating
          </Link>
        </div>
      </div>
      <div className="row slider">
        <Carousel
          interval={3000}
          pause={false}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/1.png"
                alt="Item 1"
              />
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/2.png"
                alt="Item 2"
              />
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/3.png"
                alt="Item 3"
              />
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/4.png"
                alt="Item 4"
              />
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/5.png"
                alt="Item 5"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/4.png"
                alt="Item 4"
              />
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/5.png"
                alt="Item 5"
              />
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/6.png"
                alt="Item 6"
              />
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/1.png"
                alt="Item 1"
              />
              <img
                style={imgStyle}
                src="src/pages/main/component/pics/2.png"
                alt="Item 2"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Donate;
