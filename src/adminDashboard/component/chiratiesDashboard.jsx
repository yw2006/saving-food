/* eslint-disable no-constant-condition */
import { chiretiesData } from "../../stup/context/chiretiesdata.js";
import '../style/chiratiesashboard.css'
function ChiratiesDashboard() {
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">chiraties Dashboard</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-responsive-xl">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Donation Date</th>
                      <th>Donation Value</th>
                      <th>Donation state</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chiretiesData.map((data) => {
                      return (
                        <tr className="alert" role="alert" key={data}>
                          <td className="d-flex align-items-center">
                            <div>
                              <span>{data.name}</span>
                            </div>
                          </td>
                          <td>
                            <p>{data.date}</p>
                          </td>
                          <td>
                            <p>{data["donation-value"]}$</p>
                          </td>
                          <td>
                            <p
                              className={
                                data.state === "accept"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {data.state}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChiratiesDashboard;
