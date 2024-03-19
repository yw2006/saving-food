import { Link } from "react-router-dom";
import "../style/Banner.css";

export default function Banner() {
  return (
    <div className="baner mb-5">
      <div className="background-overlay">
        <div className="container p-3 d-flex flex-column flex-md-row align-items-center">

          <div className="text bannertext">
            <h1>Don't Throw Away<br/><span>Recycle</span></h1>
            <h2 className="texting">for Another Day!</h2>
          </div>

          <div className="button text-center align-items-center mt-3 mt-md-0">
            <Link to="/signup" className="btn btn-outline-dark rounded-pill pt-3 pb-3 ps-4 pe-4 baton">JOIN OUR TEAM</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
