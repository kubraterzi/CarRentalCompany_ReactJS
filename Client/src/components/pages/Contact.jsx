import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Navbar from "./../bars/Navbar";
import SocialMediaArea from "../utilities/SocialMediaArea";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="contact">
        <h1 className="section-header"> Contact </h1>

        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <SendIcon sx={{ fontSize: "x-large", marginTop: "4px" }} />
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <LocationOnIcon sx={{ fontSize: "x-large" }} />
                <span className="contact-text place">İstanbul, Turkey</span>
              </li>

              <li className="list-item">
                <LocalPhoneIcon sx={{ fontSize: "x-large" }} />
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (212) 555-2368
                  </a>
                </span>
              </li>

              <li className="list-item">
                <EmailIcon sx={{ fontSize: "x-large" }} />
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    ktrental@gmail.com
                  </a>
                </span>
              </li>
            </ul>
            <SocialMediaArea />
            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
