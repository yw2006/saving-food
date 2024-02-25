
import "./style/navbar.css"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="bg-white nabvar2">
        <div className="container bg-white">
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Saving food
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse text-center"
                id="navbarScroll"
              >
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll list">
                  <li className="nav-item dropdown">
                    <Link className=" home-button nav-link " to="/">
                      home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className=" home-button nav-link " href="/#about">
                      about us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className=" home-button nav-link " to="/contactus">
                      contact us
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className=" home-button nav-link " to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className=" home-button nav-link "
                      to="/VolunteringDetails"
                    >
                      volunter{" "}
                    </Link>
                  </li>

                  {/* <li className="nav-item dropdown">
                    <Link
                      to={"/VolunteringDetails"}
                      className="dropdown-item"
                      href="#"
                    >
                      voluntere{" "}
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="dropdown-item" href="#">
                      about us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="dropdown-item" to="/Faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="dropdown-item" to="/Faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item dropdown"></li>
                  <li></li>
                  <li></li>
                  <li>
                    <Link to={"/contactus"} className="dropdown-item" href="#">
                      contact us
                    </Link>
                  </li> */}
                </ul>
                <form className="d-flex cont-btn" role="search">
                  <button className="contact-button" type="submit">
                    <span>
                      <Link className=" nav-link " to="/donation">
                        donate now
                      </Link>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}