import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Turn as Hamburger } from "hamburger-react";
function Header() {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const changeNavbarColor = () => {
    if (location.pathname !== "/contactus") {
      if (window.scrollY >= 75) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    } else if (location.pathname === "/contactus") {
      setChangeColor(true);
    }
  };
  useEffect(() => {
    changeNavbarColor();
  });

  const [menuActive, setMenuActive] = useState(false);
  const showMenu = () => {
    setMenuActive(!menuActive);
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Container changeColor={changeColor} location={location}>
      <Logo>
        <img
          src="https://ik.imagekit.io/wupg3d27d/tr:h-100,w-212/logo_D-Ye21hQn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662891437990"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </Logo>
      <Menu>
        <Button
          onClick={() => navigate("/")}
          underLine={location.pathname === "/" ? true : false}
        >
          Home
        </Button>
        <Button
          onClick={() => navigate("/contactus")}
          underLine={location.pathname === "/contactus" ? true : false}
        >
          Contact US
        </Button>
        <Hamburger color="#fff" size={"22"} onToggle={showMenu} />
      </Menu>
      <div className={menuActive ? "hamburgerMenu active" : "hamburgerMenu"}>
        <ul className="menu-items">
          <li className="item-text" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="item-text" onClick={() => navigate("/contactus")}>
            Contact US
          </li>
        </ul>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  transform: translate(-50%, 0);
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;

  height: 75px;

  background-color: ${(props) => (props.changeColor ? "black" : "transparent")};

  transition: 0.4s all ease-in-out;
  z-index: 1000;
  .hamburgerMenu {
    background-color: white;

    width: 250px;
    height: 100vh;
    position: fixed;
    top: 75px;

    right: -100%;
    color: black;
    display: flex;
    justify-content: center;
    transition: 850ms;
    z-index: 1000;

    .menu-items {
      width: 80%;
      text-decoration: none;
      list-style-type: none;

      .item-text {
        margin-top: 20px;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }

  .hamburgerMenu.active {
    right: 0;
    transition: 350ms;
  }
`;

const Logo = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  img {
    height: 100%;
  }

  @media only screen and (max-width: 900px) {
    height: 80%;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .hamburger-react {
    width: 25px;
    display: none;
    margin-right: 20px;
    @media only screen and (max-width: 900px) {
      display: block;
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  margin-right: 40px;
  text-transform: uppercase;
  font-size: 12px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 120%;
    background-color: rgba(196, 143, 86, 0.808);
    height: ${(props) => (props.underLine ? "10px" : "0px")};
    bottom: -4px;
    left: 0;
    transform: translate(-50%, 0);
    left: 50%;
    z-index: -1;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export default Header;
