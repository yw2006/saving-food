import React from "react";
import "../style/Cards.css";
function Cards() {

  return (
    <div className="container mb-5">
      <h6
        style={{
          color: "green",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "30px",
        }}
      >
        Start Donating Now{" "}
      </h6>
      <h1 style={{ textAlign: "center" }} className="tittle">
        Our Services
      </h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card food-card" style={{ textAlign: "center" }}>
            <img
              src="https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body">
              <h6 className="donation-nums">
                <span style={{ color: "green" }}>$8,100</span> of{" "}
                <span style={{ color: "orange" }}>$25,000</span> raised
              </h6>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  style={{ width: "25%", backgroundColor: "orange" }}
                ></div>
              </div>
              <h5 class="card-title" style={{ marginTop: "15px" }}>
                Food Donation{" "}
              </h5>
              <p class="card-text">
                {"Food donation is the process of giving unused or surplus food to people in need. The donation aims to reduce food waste and address hunger needs in the community. Food can be donated through charities, social restaurants and food banks.".slice(
                  0,
                  99
                )}
                .....
              </p>
              <a
                href="#"
                className="icon-link"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <svg
                  style={{ marginRight: "5px", color: "green" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ textAlign: "center" }}>
            <img
              src="https://images.pexels.com/photos/15104328/pexels-photo-15104328/free-photo-of-fresh-tasty-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h6 className="donation-nums">
                <span style={{ color: "green" }}>$8,100</span> of{" "}
                <span style={{ color: "orange" }}>$25,000</span> raised
              </h6>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  style={{ width: "25%", backgroundColor: "orange" }}
                ></div>
              </div>
              <h5 class="card-title" style={{ marginTop: "15px" }}>
                Food Recycling{" "}
              </h5>
              <p class="card-text">
                {"Donate food to those in need, compost rotting fruits and vegetables, use proper drying and storage techniques, set up social catering. These measures contribute to reducing food waste, improving food sustainability, and meeting the food needs of the community.".slice(
                  0,
                  100
                )}
                ....
              </p>
              <a
                href="#"
                className="icon-link"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <svg
                  style={{ marginRight: "5px", color: "green" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ textAlign: "center" }}>
            <img
              src="https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h6 className="donation-nums">
                <span style={{ color: "green" }}>$8,100</span> of{" "}
                <span style={{ color: "orange" }}>$25,000</span> raised
              </h6>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  style={{ width: "25%", backgroundColor: "orange" }}
                ></div>
              </div>
              <h5 class="card-title" style={{ marginTop: "15px" }}>
                Food Protection
              </h5>
              <p class="card-text">
                {"Store it at an appropriate temperature. Separate fresh from half-cooked foods. Use airtight containers and store them in the refrigerator. Freeze freezable food. Avoid exposure to outside air for long periods. Use clean tools to handle food.".slice(
                  0,
                  100
                )}
                ....
              </p>
              <a
                href="#"
                className="icon-link"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <svg
                  style={{ marginRight: "5px", color: "green" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
