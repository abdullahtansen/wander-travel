import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer__container">
        <div>
          <h3>ABOUT</h3>
          <p>
            We are Dreamy Travel. We are offering some amazing offer for you.
          </p>
          <div className="social__media">
            <a
              href="https://www.facebook.com/abdullahtansen"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullahtansen/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/abdullah_al_tansen/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div>
          <h3>SUPPORT</h3>
          <ul>
            <li> F.A.Q</li>
            <li>Wishlist</li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <h3>PAGES</h3>
          <ul>
            <li>404 Page</li>
            <li>Password Page</li>
            <li>Collections Page</li>
            <li>Products Page</li>
          </ul>
        </div>
        <div>
          <h3>INFORMATION</h3>
          <ul>
            <li>Special products</li>
            <li>New products</li>
            <li>Best sellers</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <h3> NEWSLETTER</h3>
          <p>Signup to be the first receive our hottest news and promotion.</p>
          <div className="d-flex">
            <input
              type="email"
              autoComplete="off"
              placeholder="Your Email"
              spellCheck="false"
              className="form-control"
            />
            <Link to="/login" className="btn btn__color">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Link>
          </div>
        </div>
      </div>
      <p className="copy__right">
        Copy Right &copy; all right reserved by ||Tansen
      </p>
    </footer>
  );
};

export default Footer;
