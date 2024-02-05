import React from "react";
import "../style/Donate.css";
import { Carousel } from "react-bootstrap";

function Donate() {
  const imgStyle = {
    width: "10%", // Adjust the width as needed
    marginRight: "10px", // Add spacing between images
  };

  return (
    <div className="container-fluid">
      <div className="first  row">
      <div className="sec row">
        <h1 className="heading " >
          Let’s Together Protect and Enhance Environment for our Future
          Generation
        </h1>

      </div>
      <button
          type="button"
          class="btn btn-outline-warning text-light  start-btn "
          style={{
            borderRadius: "100px",
            marginLeft: "180px",
            width: "190px",
            marginTop: "10px",
            height: "60px",
          }}
        >
          Start Donating
        </button>
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
