import React from "react";
import Navbar from "../../../commn/Navabar";
import Navabar2 from "../../../commn/navbar";
import Footer from "../../../commn/Footer.jsx";
import "../style/Faq.css";
import secound from "../../../pages/main/component/pics/second.jpg";

export default function Faq() {
  return (
    <div>
      <div className="div_one container-fluid d-flex flex-column justify-content-center align-items-center" style={{ position: "relative" }}>
        <div className="sec_img_err">
          <img src={secound} alt="Background Image" style={{
            position: "absolute", width: "100%", height: "320px"
          }} />
        </div>
        <div style={{ position: "relative", color: "white", marginTop: "100px", textAlign: "center" }}>
          <div>
            <h1 className="div_one_h1">FAQ</h1>
          </div>
          <div>
            <a href="/" className="div_two_a">Home</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-double-right"
              viewBox="0 0 16 16"
              color="white"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
            <span className="div_two_span"> FAQ </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1 accordin_div">
          <div className="col">
            <div class="accordion the_first_col" id="accordionExample1">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne1"
                    aria-expanded="true"
                    aria-controls="collapseOne1"

                  >
                    Where do I find my Office product key?
                  </button>
                </h2>
                <div
                  id="collapseOne1"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample1"
                  aria-labelledby="headingOne"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo1"
                    aria-expanded="false"
                    aria-controls="collapseTwo1"
                  >
                    I am having trouble, what else should I do?
                  </button>
                </h2>
                <div
                  id="collapseTwo1"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample1"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree1"
                    aria-expanded="false"
                    aria-controls="collapseThree1"
                  >
                    I need more information about Theme.
                  </button>
                </h2>
                <div
                  id="collapseThree1"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample1"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour1"
                    aria-expanded="false"
                    aria-controls="collapseFour1"
                  >
                    What do you mean by item and end product?
                  </button>
                </h2>
                <div
                  id="collapseFour1"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample1"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive1"
                    aria-expanded="false"
                    aria-controls="collapseFive1"
                  >
                    How can I activate the current theme and product?
                  </button>
                </h2>
                <div
                  id="collapseFive1"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample1"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="accordion" style={{ border: "none", backgroundColor: "white" }} id="accordionExample2">
              <div class="accordion-item"  >
                <h2 class="accordion-header" >
                  <button

                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne2"
                    aria-expanded="true"
                    aria-controls="collapseOne2"
                  >
                    Where do I find my Office product key?
                  </button>
                </h2>
                <div
                  id="collapseOne2"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo2"
                    aria-expanded="false"
                    aria-controls="collapseTwo2"
                  >
                    I am having trouble, what else should I do?
                  </button>
                </h2>
                <div
                  id="collapseTwo2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>



              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree2"
                    aria-expanded="false"
                    aria-controls="collapseThree2"
                  >
                    I am having trouble, what else should I do?
                  </button>
                </h2>
                <div
                  id="collapseThree2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour2"
                    aria-expanded="false"
                    aria-controls="collapsefour2"
                  >
                    I am having trouble, what else should I do?
                  </button>
                </h2>
                <div
                  id="collapsefour2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive2"
                    aria-expanded="false"
                    aria-controls="collapsefive2"
                  >
                    I am having trouble, what else should I do?
                  </button>
                </h2>
                <div
                  id="collapsefive2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    Anim pariatur cliche a reprehenderit, enim the eiusmod high
                    life with accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmodb runch moon.
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
