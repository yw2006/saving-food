import React from "react";
import "../style/volanteers.css";
function Volanteers() {
  return (
    <div className="container mb-2">
      <section class="mx-auto my-5">
        <h5 className="text-center text-success">Team Members</h5>
        <h1 className="text-center questionheader mb-4">Our Volunteers</h1>
        <div className="parent row p-4">
          <div className="col-md-3 col-xs-12 child">
            <div className="bg-light parentimg">
              <img
                src="https://i.ibb.co/mJjbL7G/image-removebg-preview-2.png"
                alt="image-removebg-preview-2"
                border="0"
                className="w-100 volunteerimg"
              />
              <div className="content fade">
                <p></p>
              </div>
            </div>
            <div className="bg-light h-25 w-100 text-center m-auto pt-3">
              <h3>Kevin Martin</h3>
              <p className="text-secondary">Volunteer</p>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 child">
            <div className="bg-light parentimg">
              <img
                src="https://i.ibb.co/PG6MPpJ/image-removebg-preview-3.png"
                alt="image-removebg-preview-3"
                border="0"
                className="w-100 volunteerimg"
              />
              <div className="content fade">
                <p></p>
              </div>
            </div>
            <div className="bg-light h-25 w-100 text-center m-auto pt-3">
              <h3>Julianne Moore</h3>
              <p className="text-secondary">Volunteer</p>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 child">
            <div className="bg-light parentimg">
              <img
                src="https://i.ibb.co/28FprHx/image-removebg-preview-1.png"
                alt="image-removebg-preview"
                border="0"
                className="w-100"
              />
              <div className="content fade">
                <p></p>
              </div>
            </div>
            <div className="bg-light h-25 w-100 text-center m-auto pt-3">
              <h3>Alec Martinez</h3>
              <p className="text-secondary">Volunteer</p>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 child">
            <div className="bg-light parentimg">
              <img
                src="https://i.ibb.co/S6nDjm6/image-removebg-preview.png"
                alt="image-removebg-preview"
                border="0"
                className="w-100"
              />
              <div className="content fade">
                <p></p>
              </div>
            </div>
            <div className="bg-light h-25 w-100 text-center m-auto pt-3">
              <h3>James Millard</h3>
              <p className="text-secondary">Volunteer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Volanteers;
