import React from "react";
import { userdonations } from "../../../stup/context/userdonations";
import "../style/userdashboard.css";
import Navbar from "../../../commn/navbar";
import Footer from "../../../commn/Footer";
function UserDashboard() {
  return (
    <div>
      <Navbar />
      <section className="ftco-section mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">User Dashboard</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-responsive-xl">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Charity</th>
                      <th>Donation Date</th>
                      <th>Donation Value</th>
                    </tr>
                  </thead>

                  {userdonations.map((userdonate, index) => {
                    return (
                      <tbody>
                        <tr className="alert" role="alert">
                          <td className="d-flex align-items-center">
                            <div>
                              <span>{userdonate.name}</span>
                            </div>
                          </td>
                          <td>
                            <p>{userdonate.charity}</p>
                          </td>
                          <td>
                            <p>{userdonate.date}</p>
                          </td>
                          <td>
                            <p>{userdonate["donation-value"]}$</p>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default UserDashboard;
