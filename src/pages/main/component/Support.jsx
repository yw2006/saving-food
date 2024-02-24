import { Link } from "react-router-dom";
import "../style/support.css";
function Support() {
  return (
    <div
      id="about"
      className="supportparent d-flex justify-content-center align-items-center flex-column"
    >
      <h1 className="text-white d-block w-50 text-center d-flex justify-content-center align-items-center supportheader">
        We Use the Support of 3,500 People to Clean the Air and Safe the
        environment
      </h1>
      <br />
      <button className="donatingbtn text-white text-center d-block d-flex justify-content-center align-items-center">
        <Link className="nav-link" to="/donation">donate now</Link>
      </button>
    </div>
  );
}

export default Support;
