import Navbar from "../../../commn/Navabar";
import Navabar2 from "../../../commn/navbar";
import Footer from "../../../commn/Footer.jsx";
import secound from "../../../pages/main/component/pics/second.jpg";
import "../style/Error.css";
function Error() {
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
            <h1 className="div_one_h1">404</h1>
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
            <span className="div_two_span"> 404 Not Found </span>
          </div>
        </div>
      </div>

      <div className="container cont_tow">
        <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1">
          <div className="col">
            <h1 className="text404">404</h1>
            <h3 className="notf">Oops! Page Not Found!</h3>
            <p className="para">
              The page you are looking for does not exist. It might have been

              moved or deleted.
            </p>
            <a className="back btn" href="/">Back To Home</a>
          </div>
          <div className="col">
            <h3 className="col-2-text">Search Website</h3>
            <p className="para">
              Please use the search box to find what you are looking for.
              Perhaps searching can help.
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="Search..."
                aria-label=""
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text" type="submit" id="basic-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Error;
