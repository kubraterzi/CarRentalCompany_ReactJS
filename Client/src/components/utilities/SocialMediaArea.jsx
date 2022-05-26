import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialMediaArea = () => {
  return (
    <>
      <hr />
      <ul className="social-media-list">
        <li>
          <a href="#" target="_blank" className="contact-icon">
            <TwitterIcon sx={{ fontSize: "x-large", marginTop: "17px" }} />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="contact-icon">
            <InstagramIcon sx={{ fontSize: "x-large", marginTop: "17px" }} />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="contact-icon">
            <FacebookIcon sx={{ fontSize: "x-large", marginTop: "17px" }} />
          </a>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default SocialMediaArea;
