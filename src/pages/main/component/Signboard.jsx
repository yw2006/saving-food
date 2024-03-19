import React from "react";
import "../style/Signboard.css";
function Signboard() {
  return (
    <div className="container board m-auto">
      <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-2 row1 w-100 h-100">
        <div className="pic piccontainer m-auto" >
          <div className="shine-container col-md-12 col-sm-12 col-xs-12">
            <img
              className="sora "
              src="https://i.pinimg.com/564x/ba/6f/81/ba6f81c6c452c3965aff9bd81cc0a06f.jpg"
              alt=""
            />
          </div>
          <div class="text-block">
            <p>For any inquiries call the hotline: 010 6290 7530</p>
          </div>
        </div>
        <div className="col text">
          <h1>Protect Our Next Future Generation</h1>
          <p>
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humouor
            randomised words even slightly believable.
          </p>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li>
              <svg
                style={{ color: "green" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>
              {"  "}
              Find out how and where you can Donate
            </li>
            <li>
              <svg
                style={{ color: "green" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>{" "}
              We use sustainable Donation methods
            </li>

            <li>
              <svg
                style={{ color: "green" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>{" "}
              Various versions have evolved over the years
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Signboard;
