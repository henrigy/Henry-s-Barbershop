import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              HENRY'S BARBERSHOP
            </SocialLogo>
            <WebsiteRights>
              Henry's Barbershop © 2018 All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/henrybliu"
                target="_blank"
                arial-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/henrysbarbershop/?hl=en"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.linkedin.com/in/henrybliu/"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
