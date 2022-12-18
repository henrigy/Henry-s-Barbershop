import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              HENRY'S BARBERSHOP
            </NavLogo>
            <MobileIcon
              onMouseOver={({ target }) => (target.style.color = "#ff5f1f")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              onClick={toggle}
            >
              <FaBars style={{ color: "black" }} />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="schedule"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  SCHEDULE
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="gallery"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  GALLERY
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="reviews"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  REVIEWS
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
