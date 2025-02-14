import React from 'react';
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const HeaderSocial = () => {
  return (
    <div className="home__socials">
      <a href="https://www.linkedin.com/in/arshlankhan/" target='_blank' className="home__social-link">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/Arshlankhann" target='_blank' className="home__social-link">
        <AiFillGithub />
      </a>
      <a href="https://www.instagram.com/arshlan.khan_/" target='_blank' className="home__social-link">
        <BsInstagram > </BsInstagram>
      </a>
      <a href="https://www.twitter.com/" target='_blank' className="home__social-link">
        <BsTwitterX />
      </a>


    </div>
  )
}

export default HeaderSocial