import React from "react";
import "./style/navbar.css"
export default function Navbar(){
    return <>
    <div className="bg-white nabvar2">
    <div className="container bg-white">
  <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Saving dood
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
      <div className="collapse navbar-collapse text-center" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll list">
          <li className="nav-item dropdown">
            <a className=" home-button nav-link " href="#">
              home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              pages
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  about us
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  volunteer details{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/404">
                  404
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/Faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  contact us
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              services
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              event
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              news
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              shop
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  shop
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  cart
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  checkout
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  my account
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex cont-btn" role="search">
          <button className="contact-button" type="submit">
          <span>Contact Us</span>
          </button>
        </form>
      </div>
    </div>
  </nav>
</div>
</div>  
    </>
}