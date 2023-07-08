import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/vivekprakash272" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/viveek_prakaash/" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/vivek.prakash.731" target="_blank">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
