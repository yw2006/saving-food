import { Link } from "react-router-dom";
import "../style/Banner.css";
export default function Banner (){
    return <>
<div className="container-fluid baner mb-3">
  <div className="background-overlay">

  <div className="d-inline-flex container p-4 banner">

    <div className="text">
      <h1>Don't Throw Away<br/><span>Recycle</span></h1>
      <h2 className="texting">for Another Day!</h2>
    </div>
    <div className="button text-center align-content-center mt-5">
      <Link to="/signup" className="btn btn-outline-dark rounded-pill pt-3 pb-3 ps-4 pe-4 baton">JOIN OUR TEAM</Link>
    </div>
  </div>
  </div>
</div>
 
    
    </>
    
}